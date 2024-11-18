import { Component } from '@angular/core';
import {
  Tab,
  TabsPaginationComponent,
} from '../../shared/tabs-pagination/tabs-pagination.component';
import { TabContent0Component } from '../tabs-feat/tab-content0/tab-content0.component';

@Component({
  selector: 'tabs-pagination-feat',
  standalone: true,
  imports: [TabsPaginationComponent, TabContent0Component],
  templateUrl: './tabs-pagination-feat.component.html',
  styleUrl: './tabs-pagination-feat.component.scss',
})
export class TabsPaginationFeatComponent {
  tabs: Tab[] = [
    { label: 'トップ' },
    { label: '準速' },
    // { label: '社会テストテストテストテスト', isDisabled: true },
    { label: '社会' },
    { label: '科学・文化' },
    { label: '政治' },
    { label: 'ビジネス' },
    { label: '国際' },
    { label: 'スポーツ' },
    // { label: 'テストテストテストテスト' },
  ];

  selectedTabIndex = 0; // 初期表示のタブ
  maxLabelLength = 10; // タブ名の最大文字数
  isDarkMode = false; // ダークモードの切り替え
}
