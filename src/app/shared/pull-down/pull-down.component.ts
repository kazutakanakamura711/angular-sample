import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  // セレクトボックスのwidth
  @Input() width?: string;
  // マルチセレクトにするかどうか
  @Input() isMulch?: boolean;
  // 表示項目
  @Input() listItems: ListItem[] = [];
  // 初期表示させたい項目
  @Input() selectedItem?: ListItem;
  // 項目がクリックされたときに親コンポーネントに通知するイベント
  @Output() itemSelected = new EventEmitter<ListItem>();

  // ドロップダウンが開いているかどうかを管理
  isOpen = false;

  // 項目を選択したときに呼ばれるメソッド
  selectItem(item: ListItem) {
    this.selectedItem = item;
    this.itemSelected.emit(item);
    this.isOpen = false;
  }
}
