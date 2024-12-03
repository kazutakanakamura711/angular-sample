import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  // ラベルの入力
  @Input() label: string = '';
  // 初期状態
  @Input() checked: boolean = false;
  // value 属性
  @Input() value: string = '';
  // name 属性
  @Input() name: string = '';
  // ダークテーマを使うか
  @Input() isDarkTheme?: boolean;
  // チェック状態が変更されたときに通知
  @Output() checkedChange = new EventEmitter<boolean>();

  // 親コンポーネントに変更を通知
  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
