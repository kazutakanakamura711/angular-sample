import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSizeChangerComponent } from '../../shared/font-size-changer/font-size-changer.component';

@Component({
  selector: 'font-size-changer-feat',
  standalone: true,
  imports: [CommonModule, FontSizeChangerComponent],
  templateUrl: './font-size-changer-feat.component.html',
  styleUrl: './font-size-changer-feat.component.scss',
})
export class FontSizeChangerFeatComponent {
  isDarkTheme = false;

  // FontSizeChangerの表示/非表示を管理
  isFontSizeChangerVisible = false;

  // FontSizeChangerの表示切り替え
  toggleFontSizeChanger(): void {
    this.isFontSizeChangerVisible = !this.isFontSizeChangerVisible;
  }
}
