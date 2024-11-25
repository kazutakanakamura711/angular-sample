import { Component } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';
import { FontSizeChangerComponent } from '../../shared/font-size-changer/font-size-changer.component';
import { CommonModule } from '@angular/common';
import {
  ConcurrentEditComponent,
  EditingUser,
} from '../../shared/concurrent-edit/concurrent-edit.component';

@Component({
  selector: 'title-feat',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    FontSizeChangerComponent,
    ConcurrentEditComponent,
  ],
  templateUrl: './title-feat.component.html',
  styleUrl: './title-feat.component.scss',
})
export class TitleFeatComponent {
  title = 'テストタイトル';
  isFontSizeChangerVisible = false;
  isDarkTheme = false;
  editingUsers: EditingUser[] = [
    { department: 'AAAA局', userName: '田中一郎' },
    { department: 'BBBB局', userName: '田中二郎' },
    { department: 'CCCC局', userName: '田中三郎' },
    { department: 'DDDD局', userName: '田中四郎' },
    { department: 'EEEE局', userName: '田中五郎' },
    { department: 'FFFF局', userName: '田中六郎' },
  ];

  // FontSizeChangerの表示切り替え
  toggleFontSizeChanger(): void {
    this.isFontSizeChangerVisible = !this.isFontSizeChangerVisible;
  }
}
