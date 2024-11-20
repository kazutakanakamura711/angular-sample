import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FontSizeState } from './font-size.reducer';

export const selectFontSizeState =
  createFeatureSelector<FontSizeState>('fontSize');

export const selectFontSizeType = createSelector(
  selectFontSizeState,
  (state: FontSizeState) => state.fontSizeType,
);
