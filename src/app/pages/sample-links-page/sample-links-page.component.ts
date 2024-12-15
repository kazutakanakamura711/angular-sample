import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'sample-links-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sample-links-page.component.html',
  styleUrl: './sample-links-page.component.scss',
})
export class SampleLinksPageComponent implements OnInit {
  constructor(private router: Router) {}

  links = [
    { path: '/sample-links/common-layout', name: 'Common Layout Page' },
    { path: '/sample-links/tabs', name: 'Tabs Page' },
    { path: '/sample-links/tabs-pagination', name: 'Tabs Pagination Page' },
    { path: '/sample-links/font-size-changer', name: 'Font Size Changer Page' },
    { path: '/sample-links/title', name: 'Title Page' },
    { path: '/sample-links/header', name: 'Header Page' },
    { path: '/sample-links/pull-down', name: 'Pull Down Page' },
    { path: '/sample-links/checkbox', name: 'Checkbox Page' },
    { path: '/sample-links/navigation-menu', name: 'Navigation Menu Page' },
    { path: '/sample-links/common-layout/sampleA', name: 'SampleA' },
    { path: '/sample-links/common-layout/sampleB', name: 'SampleB' },
    { path: '/sample-links/common-layout/sampleC', name: 'SampleC' },
  ];

  isSampleLinksPath = false;
  private lastUrl: string | null = null; // 最後のURLを記録

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd)) // NavigationEnd のみを監視
      .subscribe(() => {
        this.evaluateCurrentRoute();
      });

    this.evaluateCurrentRoute(); // 初期化時に評価
  }

  private evaluateCurrentRoute(): void {
    const currentUrl = this.router.url;

    // 前回のURLと同じなら処理をスキップ
    if (currentUrl === this.lastUrl) return;

    this.lastUrl = currentUrl; // 現在のURLを記録
    this.isSampleLinksPath = currentUrl === '/sample-links';
    console.log('現在のURL:', currentUrl);
  }

  navigate(path: string): void {
    this.router.navigate([path]);
  }
}
