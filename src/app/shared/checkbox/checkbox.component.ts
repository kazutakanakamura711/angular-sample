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
  @Input() isChecked: boolean = false;
  // value 属性
  @Input() value: string = '';
  // name 属性
  @Input() name: string = '';
  // ダークテーマを使うか
  @Input() isDarkTheme?: boolean;
  // チェック状態が変更されたときに通知
  @Output() isCheckedChange = new EventEmitter<boolean>();

  // 親コンポーネントに変更を通知
  toggle() {
    this.isChecked = !this.isChecked;
    this.isCheckedChange.emit(this.isChecked);
  }
}
