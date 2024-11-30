import { Component } from '@angular/core';
import {
  PullDownComponent,
  ListItem,
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

  listItems: ListItem[] = [
    { id: 'AAATS01', label: 'テスト1画面' },
    { id: 'AAATS02', label: 'テスト2画面' },
    { id: 'AAATS03', label: 'テスト3画面' },
    { id: 'AAATS04', label: 'テスト4画面' },
    { id: 'AAATS05', label: 'テスト5画面' },
    { id: 'AAATS06', label: 'テスト6画面' },
    { id: 'AAATS07', label: 'テスト7画面' },
  ];

  // 初期選択項目
  selectedItems: ListItem[] = [this.listItems[0]];

  // 項目が選択されたときの処理
  onItemSelected(items: ListItem[]) {
    console.log('選択された項目:', items);
  }
}
