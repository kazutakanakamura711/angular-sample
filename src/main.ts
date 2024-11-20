// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { fontSizeReducer } from './app/store/font-size.reducer/font-size.reducer';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ fontSize: fontSizeReducer }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: true, // 開発環境のみ詳細なログを有効化
    }),
    importProvidersFrom(
      RouterModule.forRoot(routes), // ルーティング設定
    ),
  ],
}).catch((err) => console.error(err));
