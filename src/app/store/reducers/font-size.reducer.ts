import { createReducer, on } from '@ngrx/store';
import { updateFontSize } from '../actions/font-size.actions';
import { FontSizeType } from '../../shared/font-size-changer/types';

export interface FontSizeState {
  fontSizeType: FontSizeType;
}

export const initialState: FontSizeState = {
  fontSizeType: FontSizeType.Recommendation,
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
