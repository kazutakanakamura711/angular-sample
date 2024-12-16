import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.updateSelectedTabIndex();
  }

  private updateSelectedTabIndex(): void {
    const currentPath = this.router.url;
    //URLに一致するタブのインデックスを検索
    const index = this.tabs.findIndex((tab) => tab.path === currentPath);
    //インデックスが有効なら設定、無効なら0に設定
    this.selectedTabIndex = index >= 0 ? index : 0;
  }

  onTabChange(index: number): void {
    const selectedTab = this.tabs[index];
    if (!selectedTab.path) return;

    this.selectedTabIndex = index;
    this.router.navigate([selectedTab.path]);
  }
}
