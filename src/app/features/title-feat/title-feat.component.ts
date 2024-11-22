import { Component } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';
import { FontSizeChangerComponent } from '../../shared/font-size-changer/font-size-changer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'title-feat',
  standalone: true,
  imports: [CommonModule, TitleComponent, FontSizeChangerComponent],
  templateUrl: './title-feat.component.html',
  styleUrl: './title-feat.component.scss',
})
export class TitleFeatComponent {
  title = 'テストタイトル';
  isFontSizeChangerVisible = false;
  isDarkTheme = false;
  editingUsers: string[] = ['UserNameA', 'UserNameB', 'UserNameC', 'UserNameD'];

  // FontSizeChangerの表示切り替え
  toggleFontSizeChanger(): void {
    this.isFontSizeChangerVisible = !this.isFontSizeChangerVisible;
  }
}
