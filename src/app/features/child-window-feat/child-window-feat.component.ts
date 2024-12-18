import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';
import { FontSizeChangerComponent } from '../../shared/font-size-changer/font-size-changer.component';
import { EditingUser } from '../../shared/concurrent-edit/concurrent-edit.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'child-window-feat',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TitleComponent,
    FontSizeChangerComponent,
  ],
  templateUrl: './child-window-feat.component.html',
  styleUrl: './child-window-feat.component.scss',
})
export class ChildWindowFeatComponent {
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
}
