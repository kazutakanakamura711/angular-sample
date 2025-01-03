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
  // 活性・非活性
  @Input() isDisabled?: boolean;
  // ダークテーマを使うか
  @Input() isDarkTheme?: boolean;
  // 表示項目
  @Input() listItems: ListItem[] = [];
  // 初期表示させたい項目（選択したアイテムを配列で管理）
  @Input() selectedItems: ListItem[] = [];
  // 項目がクリックされたときに親コンポーネントに通知するイベント
  @Output() itemSelected = new EventEmitter<ListItem[]>();
  // 親コンポーネントに閉じるイベントを通知
  @Output() onClose = new EventEmitter<void>();

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

  // 項目を選択したときの処理
  selectItem(item: ListItem) {
    // シングルセレクトの場合
    if (!this.isMulch) {
      this.selectedItems = [item];
      this.isOpen = false;
      return;
    }

    // マルチセレクトの場合
    const isSelectedItem = this.selectedItems.some(
      (selectedItem) => selectedItem.id === item.id,
    );

    // すでに選択されているアイテムは削除
    if (isSelectedItem) {
      this.selectedItems = this.selectedItems.filter(
        (selectedItem) => selectedItem.id !== item.id,
      );
      return;
    }

    // アイテムが選択されていなければ追加
    this.selectedItems = [...this.selectedItems, item];
  }

  // チェックボックスが選択されているかどうかを判定
  isSelected(item: ListItem): boolean {
    return this.selectedItems.some(
      (selectedItem) => selectedItem.id === item.id,
    );
  }

  // isOpen の変化を監視
  ngDoCheck() {
    if (this.prevIsOpen && !this.isOpen) {
      this.itemSelected.emit(this.selectedItems);
    }
    this.prevIsOpen = this.isOpen;
  }
}
