import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';

export interface ListItem {
  id: string;
  label: string;
}
@Component({
  selector: 'pull-down',
  standalone: true,
  imports: [CommonModule, CheckboxComponent],
  templateUrl: './pull-down.component.html',
  styleUrl: './pull-down.component.scss',
})
export class PullDownComponent {
  // セレクトボックスのwidth
  @Input() width?: string;
  // マルチセレクトにするかどうか
  @Input() isMulch?: boolean;
  // ダークテーマを使うか
  @Input() isDarkTheme?: boolean;
  // 表示項目
  @Input() listItems: ListItem[] = [];
  // 初期表示させたい項目（選択したアイテムを配列で管理）
  @Input() selectedItems: ListItem[] = [];
  // 項目がクリックされたときに親コンポーネントに通知するイベント
  @Output() itemSelected = new EventEmitter<ListItem[]>();

  // ドロップダウンが開いているかどうかを管理
  isOpen = false;

  // デフォルトのメッセージ
  private defaultPlaceholderMessage = '選択してください';

  // 前回のisOpenの状態を保存する変数
  private prevIsOpen = false;

  // 選択された項目をカンマ区切りで返すgetter
  get selectedItemsString(): string {
    return this.selectedItems.length > 0
      ? this.selectedItems.map((item) => item.label).join(', ')
      : this.defaultPlaceholderMessage;
  }

  // 項目が選択されたときに呼ばれるメソッド
  selectItem(item: ListItem, checked: boolean) {
    if (checked) {
      // チェックが入った場合はselectedItemsに追加
      this.selectedItems = [...this.selectedItems, item];
    } else {
      // チェックが外れた場合はselectedItemsから削除
      this.selectedItems = this.selectedItems.filter((i) => i.id !== item.id);
    }
    // アイテム選択後に選択された項目を親コンポーネントに通知
    this.itemSelected.emit(this.selectedItems);
  }

  // アイテムが選択されているかを判定するメソッド
  isItemSelected(item: ListItem): boolean {
    return this.selectedItems.some((i) => i.id === item.id);
  }

  // isOpen の変化を監視
  ngDoCheck() {
    if (this.prevIsOpen && !this.isOpen) {
      this.itemSelected.emit(this.selectedItems);
    }
    this.prevIsOpen = this.isOpen;
  }
}
