import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListItem, PullDownComponent } from '../pull-down/pull-down.component';
import {
  AreaCategoryIdType,
  AreaCategoryIdTypeDisplay,
  AreaNameIdType,
  AreaNameIdTypeDisplay,
} from '../header/types';
import { ScreenIdType, ScreenIdTypeDisplay } from './types';

@Component({
  selector: 'navigation-menu',
  standalone: true,
  imports: [CommonModule, PullDownComponent],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss',
})
export class NavigationMenuComponent {
  // セレクトボックスの幅を指定
  width: string = 'w-40';
  // マルチセレクトにするかどうか
  isMulch: boolean = true;
  // ダークテーマを使うか
  isDarkTheme: boolean = false;

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

  // TODO:storeから取得したIDを使用する
  categoryId = AreaCategoryIdType.Area;
  areaId = AreaNameIdType.Ehime;

  // 初期選択項目をIDに基づいて設定
  selectedCategoryItems: ListItem[];
  selectedAreaItems: ListItem[];

  // メニュー項目
  navigationMenuList = Object.keys(ScreenIdType).map((key) => {
    const id = ScreenIdType[key as keyof typeof ScreenIdType];
    const label = ScreenIdTypeDisplay[id];
    return { id, label };
  });

  // メニューの表示状態
  isMenuVisible = false;

  constructor() {
    // categoryIdに一致する項目を検索して設定
    const selectedCategoryItem = this.categoryList.find(
      (item) => item.id === this.categoryId,
    );
    this.selectedCategoryItems = selectedCategoryItem
      ? [selectedCategoryItem]
      : [];

    // areaIdに一致する項目を検索して設定
    const selectedAreaItem = this.areaList.find(
      (item) => item.id === this.areaId,
    );
    this.selectedAreaItems = selectedAreaItem ? [selectedAreaItem] : [];
  }

  // 項目が選択されたときの処理
  onItemSelected(items: ListItem[]) {
    console.log('選択された項目:', items);
  }

  // 表示/非表示を切り替え
  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
