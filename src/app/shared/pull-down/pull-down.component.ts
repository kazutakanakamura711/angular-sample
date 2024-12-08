import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  HostListener,
} from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';

export interface ListItem {
  id: string;
  label: string;
}

export interface Disclosure {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// 型ガード
const isHTMLElement = (target: EventTarget | null): target is HTMLElement => {
  return target instanceof HTMLElement;
};

@Component({
  selector: 'pull-down',
  standalone: true,
  imports: [CommonModule, CheckboxComponent],
  templateUrl: './pull-down.component.html',
  styleUrl: './pull-down.component.scss',
})
export class PullDownComponent {
  // プルダウンが開いているかどうかを管理
  @Input() isOpen = false;
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

  // デフォルトのメッセージ
  private defaultPlaceholderMessage = '選択してください';

  // 画面全体のクリックを監視
  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent): void {
    if (!isHTMLElement(event.target) || event.target.closest('.js-pull-down'))
      return;
    this.onClose.emit();
  }

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
      this.onClose.emit();
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
}
