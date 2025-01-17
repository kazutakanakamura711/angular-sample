import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { userReducer } from './features/sample-api-feat/store/reducers/user.reducer';
import { fontSizeReducer } from './store/reducers/font-size.reducer';
import { UserEffects } from './features/sample-api-feat/store/effects/user.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // provideEffects([FontSizeEffects]), //effect使うとき
    provideEffects([UserEffects]),
    provideHttpClient(), // HttpClientModule を提供

    provideStore({
      fontSize: fontSizeReducer,
      user: userReducer, // `userReducer` を登録
    }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: true,
    }),
  ],
};
