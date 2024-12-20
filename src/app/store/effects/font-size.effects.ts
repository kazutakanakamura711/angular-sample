import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { updateFontSize } from '../actions/font-size.actions';
import { FontSizeTypePercentage } from '../../shared/font-size-changer/types';

// 使用してない
@Injectable()
export class FontSizeEffects {
  constructor(private actions$: Actions) {}

  updateFontSize$ = createEffect(
    () =>
      this.actions$.pipe(
        tap(),
        ofType(updateFontSize),
        tap(({ fontSize }) => {
          const fontSizePercentage = FontSizeTypePercentage[fontSize];
          document.documentElement.style.fontSize = fontSizePercentage;
        }),
      ),
    { dispatch: false },
  );
}
