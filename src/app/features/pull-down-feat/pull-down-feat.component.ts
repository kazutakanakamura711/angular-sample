import { Component } from '@angular/core';
import {
  PullDownComponent,
  ListItem,
  Disclosure,
} from '../../shared/pull-down/pull-down.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pull-down-feat',
  standalone: true,
  imports: [CommonModule, PullDownComponent],
  templateUrl: './pull-down-feat.component.html',
  styleUrl: './pull-down-feat.component.scss',
})
export class PullDownFeatComponent {
  // セレクトボックスの幅を指定
  width: string = 'w-64';
  // マルチセレクトにするかどうか
  isMulch: boolean = true;
  // ダークテーマを使うか
  isDarkTheme: boolean = false;

  listItems: ListItem[] = [
    { id: 'AAATS01', label: 'テスト1画面' },
    { id: 'AAATS02', label: 'テスト2画面' },
    { id: 'AAATS03', label: 'テスト3画面' },
    { id: 'AAATS04', label: 'テスト4画面' },
    { id: 'AAATS05', label: 'テスト5画面' },
    { id: 'AAATS06', label: 'テスト6画面' },
    { id: 'AAATS07', label: 'テスト7画面' },
  ];

  // シングルセレクトのプルダウンの状態を管理するオブジェクト
  singlePullDown: Disclosure = {
    isOpen: false,
    onOpen: () => (this.singlePullDown.isOpen = true),
    onClose: () => (this.singlePullDown.isOpen = false),
  };
  // マルチセレクトのプルダウンの状態を管理するオブジェクト
  multiPullDown: Disclosure = {
    isOpen: false,
    onOpen: () => (this.multiPullDown.isOpen = true),
    onClose: () => (this.multiPullDown.isOpen = false),
  };

  // 💡 シングルセレクトの選択項目
  selectedSingleItem: ListItem[] = [this.listItems[1]];
  // 💡 マルチセレクトの選択項目
  selectedMultiItems: ListItem[] = [this.listItems[0]];

  isOpen: boolean = false;

  onItemSelected(items: ListItem[]) {
    console.log('選択された項目:', items);
  }
}
