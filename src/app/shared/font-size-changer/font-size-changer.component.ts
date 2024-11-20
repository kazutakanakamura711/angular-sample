import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export type FontSize = 'small' | 'default' | 'large';

@Component({
  selector: 'font-size-changer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './font-size-changer.component.html',
  styleUrl: './font-size-changer.component.scss',
})
export class FontSizeChangerComponent {
  @Input() fontSizeType: FontSize = 'default';
  @Output() fontSizeChange = new EventEmitter<FontSize>(); // FontSize型を明示

  // フォントサイズを選択する
  selectFontSize(size: FontSize): void {
    this.fontSizeChange.emit(size); // FontSize型を親に送信
  }
}
