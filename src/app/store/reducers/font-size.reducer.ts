import { createReducer, on } from '@ngrx/store';
import { updateFontSize } from '../actions/font-size.actions';
import { FontSizeType } from '../../shared/font-size-changer/types';

export interface FontSizeState {
  fontSizeType: FontSizeType;
}

// フォントサイズの初期状態
const initialState: FontSizeState = {
  fontSizeType: FontSizeType.Recommendation,
};

// updateFontSizeアクションを受け取った際の状態更新ロジック
export const fontSizeReducer = createReducer(
  initialState,
  on(updateFontSize, (state, { fontSize }) => {
    console.log('Reducer executed: updateFontSize', fontSize);
    return {
      ...state,
      fontSizeType: fontSize,
    };
  }),
);
