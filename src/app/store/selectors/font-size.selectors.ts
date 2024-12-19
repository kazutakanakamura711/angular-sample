import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FontSizeState } from '../reducers/font-size.reducer';

// ストアの中からフォントサイズの状態を取得するためのセレクター
export const selectFontSizeState =
  createFeatureSelector<FontSizeState>('fontSize'); // ストアのキー「fontSize」に対応する状態を取得

// フォントサイズの現在値を取得するセレクター
export const selectFontSizeType = createSelector(
  selectFontSizeState,
  (state: FontSizeState) => {
    console.log('Selector executed: selectFontSizeType', state.fontSizeType);
    return state.fontSizeType;
  },
);
