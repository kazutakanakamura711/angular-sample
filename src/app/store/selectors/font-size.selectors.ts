import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FontSizeState } from '../reducers/font-size.reducer';

// storeの中からfontSizeの状態を取得するためのselector
export const selectFontSizeState =
  createFeatureSelector<FontSizeState>('fontSize'); // ストアのキー「fontSize」に対応する状態を取得

// fontSizeの現在値を取得するselector
export const selectFontSizeType = createSelector(
  selectFontSizeState,
  (state: FontSizeState) => {
    console.log('Selector executed: selectFontSizeType', state.fontSizeType);
    return state.fontSizeType;
  },
);
