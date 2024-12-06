import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ListItem, PullDownComponent } from '../pull-down/pull-down.component';
import {
  AreaCategoryIdType,
  AreaCategoryIdTypeDisplay,
  AreaNameIdType,
  AreaNameIdTypeDisplay,
} from '../header/types';
import { ScreenIdType, ScreenIdTypeDisplay } from './types';
import { mockData } from './mockData';

export interface ScreenInfo {
  id: ScreenIdType;
  permissions: {
    hasReadable: boolean;
    hasEditable: boolean;
    hasPublishable: boolean;
  };
}

export interface NavigationMenuStore {
  categoryId: AreaCategoryIdType;
  areaId: AreaNameIdType;
  screenInfo: ScreenInfo[];
}

@Component({
  selector: 'navigation-menu',
  standalone: true,
  imports: [CommonModule, PullDownComponent],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss',
})
export class NavigationMenuComponent {
  // セレクトボックスの幅を指定
  @Input() width?: string;
  // マルチセレクトにするかどうか
  @Input() isMulch?: boolean;
  // ダークテーマを使うか
  @Input() isDarkTheme?: boolean;

  categoryId: AreaCategoryIdType;
  areaId: AreaNameIdType;
  selectedCategoryItems: ListItem[];
  selectedAreaItems: ListItem[];

  // 表示/非表示を切り替え
  isMenuVisible = false;

  // カテゴリのリスト
  categoryList: ListItem[] = Object.keys(AreaCategoryIdType).map((key) => {
    const id = AreaCategoryIdType[key as keyof typeof AreaCategoryIdType];
    const label = AreaCategoryIdTypeDisplay[id];
    return { id, label };
  });

  // 地域のリスト
  areaList: ListItem[] = Object.keys(AreaNameIdType).map((key) => {
    const id = AreaNameIdType[key as keyof typeof AreaNameIdType];
    const label = AreaNameIdTypeDisplay[id];
    return { id, label };
  });

  // 権限を確認してからメニュー項目を作成
  navigationMenuList = mockData.screenInfo
    .filter((screen) => {
      const { hasReadable, hasEditable, hasPublishable } = screen.permissions;
      return hasReadable || hasEditable || hasPublishable;
    })
    .map((screen) => {
      const label = ScreenIdTypeDisplay[screen.id];
      return { id: screen.id, label };
    });

  constructor() {
    // mockDataからカテゴリIDと地域IDを取得
    this.categoryId = mockData.categoryId;
    this.areaId = mockData.areaId;

    // 初期値に基づいて選択項目を設定
    this.selectedCategoryItems = [this.getCategoryItemById(this.categoryId)];
    this.selectedAreaItems = [this.getAreaItemById(this.areaId)];
  }

  // 指定されたカテゴリIDに対応するカテゴリ項目を取得
  getCategoryItemById(id: string): ListItem {
    return (
      this.categoryList.find((item) => item.id === id) || this.categoryList[0]
    );
  }

  // 指定された地域IDに対応する地域項目を取得
  getAreaItemById(id: string): ListItem {
    return this.areaList.find((item) => item.id === id) || this.areaList[0];
  }

  // カテゴリ選択を初期値にリセット
  resetCategoryToInitialValue(): void {
    this.selectedCategoryItems = [this.getCategoryItemById(this.categoryId)];
  }

  // 地域選択を初期値にリセット
  resetAreaToInitialValue(): void {
    this.selectedAreaItems = [this.getAreaItemById(this.areaId)];
  }

  // 項目が選択されたときの処理
  onItemSelected(items: ListItem[]) {
    console.log('選択された項目:', items);
  }

  // 表示/非表示を切り替え
  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  // メニュー項目をクリックしたときの処理
  onClickMenuItem(id: string): void {
    console.log('選択したメニューのID:', id);
    // TODO:route設定したら以下を使う
    // import { Router } from '@angular/router';
    // this.router.navigate([route]);
    this.isMenuVisible = false;
  }
}
