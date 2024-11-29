import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface ListItem {
  id: string;
  label: string;
}
@Component({
  selector: 'pull-down',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pull-down.component.html',
  styleUrl: './pull-down.component.scss',
})
export class PullDownComponent {
  ngOnInit() {
    console.log('Received width:', this.width); // 正しく受け取っているかを確認
  }
  // セレクトボックスのwidth
  @Input() width?: string;
  // マルチセレクトにすか
  @Input() isMulch?: boolean;
  // 表示項目
  @Input() listItems: ListItem[] = [];
  // 初期表示させたい項目
  @Input() selectedItem?: ListItem;

  // ドロップダウンが開いているかどうかを管理
  isOpen = false;

  // オプションを選択したときに呼ばれるメソッド
  selectItem(item: ListItem) {
    this.selectedItem = item;
    this.isOpen = false;
  }
}
