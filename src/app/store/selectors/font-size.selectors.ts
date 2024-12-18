import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FontSizeState } from '../reducers/font-size.reducer';

export const selectFontSizeState =
  createFeatureSelector<FontSizeState>('fontSize');

export const selectFontSizeType = createSelector(
  selectFontSizeState,
  (state: FontSizeState) => {
    console.log('Selector executed: selectFontSizeType', state.fontSizeType);
    return state.fontSizeType;
  },
);
