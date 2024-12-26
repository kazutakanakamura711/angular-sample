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
    { path: '/sample-links/child-window', name: 'Child Window Page' },
    { path: '/sample-links/input', name: 'Input Page' },
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
    {
      path: '/sample-links/child-window/sampleA',
      name: 'Child Window SampleA',
    },
    {
      path: '/sample-links/child-window/sampleB',
      name: 'Child Window SampleB',
    },
    {
      path: '/sample-links/child-window/sampleC',
      name: 'Child Window SampleC',
    },
    { path: '/sample-links/validation', name: 'Validation Page' },
    { path: '/sample-links/sample-api', name: 'Sample Api Page' },
  ];

  childWindow: Window | null = null;

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
    // '/sample-links/child-window' で始まるパスをすべて対象にする
    if (!path.startsWith('/sample-links/child-window')) {
      this.router.navigate([path]); // 通常のページ遷移
      return;
    }

    // 子ウィンドウが既に存在し、閉じられていない場合
    if (this.childWindow && !this.childWindow.closed) {
      this.childWindow.location.href = path; // URLを更新
      this.childWindow.focus(); // 既存のタブにフォーカス
      return;
    }

    // 新しい子ウィンドウを開く
    const windowConfig =
      'toolbar=no,location=yes,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=1080,height=1080';
    this.childWindow = window.open(path, 'childWindow', windowConfig);
  }
}
