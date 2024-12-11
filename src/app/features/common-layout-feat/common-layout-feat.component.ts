import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../shared/title/title.component';
import { FontSizeChangerComponent } from '../../shared/font-size-changer/font-size-changer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { NavigationMenuComponent } from '../../shared/navigation-menu/navigation-menu.component';
import { Tab, TabsComponent } from '../../shared/tabs/tabs.component';
import { EditingUser } from '../../shared/concurrent-edit/concurrent-edit.component';

@Component({
  selector: 'common-layout-feat',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    FontSizeChangerComponent,
    HeaderComponent,
    NavigationMenuComponent,
    TabsComponent,
  ],
  templateUrl: './common-layout-feat.component.html',
  styleUrl: './common-layout-feat.component.scss',
})
export class CommonLayoutFeatComponent {
  // ▼タブに必要な値
  tabs: Tab[] = [
    { label: 'タブ0' },
    { label: 'タブ1タブ1タブ1タブ1タブ1' },
    {
      label:
        'タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2',
    },
    {
      label:
        'タブ3タブ3タブ3タブ3タブ3タブ3タブ3タブ3タブ3タブ3タブ3タブ3タブ3タブ3タブ3タブ3タブ3タブ3',
      isDisabled: true,
    },
  ];
  // 初期表示のタブのIndex指定
  selectedTabIndex = 0;
  // 3点リーダーの文字数制限
  maxLabelLength = 10;
  // isDarkMode = true;
  isDarkMode = false;

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

  // FontSizeChangerの表示切り替え
  toggleFontSizeChanger(): void {
    this.isFontSizeChangerVisible = !this.isFontSizeChangerVisible;
  }
}
