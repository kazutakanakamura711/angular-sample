import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { fontSizeReducer } from './store/reducers/font-size.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ fontSize: fontSizeReducer }), // NgRxストアの設定
    provideStoreDevtools({
      maxAge: 25,
      logOnly: true, // 開発環境のみ詳細なログを有効化
    }),
  ],
};
