import { Routes } from '@angular/router';
import { TabsPageComponent } from './pages/tabs-page/tabs-page.component';
import { TabsPaginationPageComponent } from './pages/tabs-pagination-page/tabs-pagination-page.component';
import { FontSizeChangerPageComponent } from './pages/font-size-changer-page/font-size-changer-page.component';
import { TitlePageComponent } from './pages/title-page/title-page.component';
import { HeaderPageComponent } from './pages/header-page/header-page.component';
import { PullDownPageComponent } from './pages/pull-down-page/pull-down-page.component';

export const routes: Routes = [
  { path: 'tabs', component: TabsPageComponent },
  { path: 'tabs-pagination', component: TabsPaginationPageComponent },
  { path: 'font-size-changer', component: FontSizeChangerPageComponent },
  { path: 'title', component: TitlePageComponent },
  { path: 'header', component: HeaderPageComponent },
  { path: 'pull-down', component: PullDownPageComponent },
];
