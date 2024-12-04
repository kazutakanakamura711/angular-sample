import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Checkbox {
  value: string;
  label: string;
  name: string;
  isChecked: boolean;
  isDisabled?: boolean;
}

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
  @Input() isChecked: boolean = false;
  // value 属性
  @Input() value: string = '';
  // name 属性
  @Input() name: string = '';
  // 非活性状態
  @Input() isDisabled?: boolean;
  // ダークテーマを使うか
  @Input() isDarkTheme?: boolean;
  // チェック状態が変更されたときに通知
  @Output() isCheckedChange = new EventEmitter<boolean>();

  // 親コンポーネントに変更を通知
  onChangeCheckbox() {
    if (this.isDisabled) return;
    this.isChecked = !this.isChecked;
    this.isCheckedChange.emit(this.isChecked);
  }
}
