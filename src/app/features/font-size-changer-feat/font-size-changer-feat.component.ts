import { Component } from '@angular/core';
import {
  FontSizeChangerComponent,
  FontSize,
} from '../../shared/font-size-changer/font-size-changer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'font-size-changer-feat',
  standalone: true,
  imports: [CommonModule, FontSizeChangerComponent],
  templateUrl: './font-size-changer-feat.component.html',
  styleUrls: ['./font-size-changer-feat.component.scss'],
})
export class FontSizeChangerFeatComponent {
  fontSizeType: FontSize = 'default'; // 現在のフォントサイズ
  isFontSizeChangerVisible = false; // FontSizeChangerの表示/非表示

  // FontSizeChangerの表示切り替え
  toggleFontSizeChanger(): void {
    this.isFontSizeChangerVisible = !this.isFontSizeChangerVisible;
  }

  // フォントサイズ変更
  changeFontSize(size: FontSize): void {
    this.fontSizeType = size; // フォントサイズを更新
    this.isFontSizeChangerVisible = false; // FontSizeChangerを自動で非表示
  }
}
