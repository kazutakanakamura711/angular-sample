import { createAction, props } from '@ngrx/store';
import { FontSizeType } from '../../shared/font-size-changer/types';

// フォントサイズを更新するためのアクション
export const updateFontSize = createAction(
  '[Font Size] Update Font Size',
  props<{ fontSize: FontSizeType }>(),
);
