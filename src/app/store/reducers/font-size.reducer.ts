import { createReducer, on } from '@ngrx/store';
import { updateFontSize } from '../actions/font-size.actions';

export type FontSize = 'small' | 'default' | 'large';

export interface FontSizeState {
  fontSizeType: FontSize;
}

export const initialState: FontSizeState = {
  fontSizeType: 'default',
};

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
