import { createAction, props } from '@ngrx/store';

export const updateFontSize = createAction(
  '[Font Size] Update Font Size',
  props<{ fontSize: 'small' | 'default' | 'large' }>(),
);
