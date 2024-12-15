import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'tab-menu',
  standalone: true,
  imports: [TabsComponent],
  templateUrl: './tab-menu.component.html',
  styleUrl: './tab-menu.component.scss',
})
export class TabMenuComponent implements OnInit {
  constructor(private router: Router) {}

  tabs = [
    { label: 'タブA', path: '/sample-links/common-layout/sampleA' },
    {
      label: 'タブBタブBタブBタブBタブB',
      path: '/sample-links/common-layout/sampleB',
    },
    {
      label:
        'タブCタブCタブCタブCタブCタブCタブCタブCタブCタブCタブCタブCタブCタブCタブCタブCタブCタブC',
      path: '/sample-links/common-layout/sampleC',
    },
  ];

  selectedTabIndex = 0; // 初期タブのインデックス
  maxLabelLength = 10;
  isDarkMode = false;

  ngOnInit(): void {
    // NavigationEnd を監視してタブインデックスを更新
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSelectedTabIndex();
      });

    // 初期化時の評価
    this.updateSelectedTabIndex();
  }

  private updateSelectedTabIndex(): void {
    const currentPath = this.router.url;
    this.selectedTabIndex = this.tabs.findIndex(
      (tab) => tab.path === currentPath,
    );
    console.log(
      '現在のタブインデックス:',
      this.selectedTabIndex,
      '現在のURL:',
      currentPath,
    );
  }

  onTabChange(index: number): void {
    const selectedTab = this.tabs[index];
    if (!selectedTab.path) return;

    console.log('タブのpath:', selectedTab.path);
    this.router.navigate([selectedTab.path]);
  }
}
