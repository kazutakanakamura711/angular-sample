import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../shared/title/title.component';
import { FontSizeChangerComponent } from '../../shared/font-size-changer/font-size-changer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { NavigationMenuComponent } from '../../shared/navigation-menu/navigation-menu.component';
import { EditingUser } from '../../shared/concurrent-edit/concurrent-edit.component';
import { TabMenuComponent } from '../../shared/tab-menu/tab-menu.component';
import { RouterModule } from '@angular/router';
import { NoticeComponent } from '../../shared/notice/notice.component';

@Component({
  selector: 'common-layout-feat',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TitleComponent,
    FontSizeChangerComponent,
    HeaderComponent,
    NavigationMenuComponent,
    TabMenuComponent,
    NoticeComponent,
  ],
  templateUrl: './common-layout-feat.component.html',
  styleUrl: './common-layout-feat.component.scss',
})
export class CommonLayoutFeatComponent {
  // ▼タイトルに必要な値
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
