import { Routes } from '@angular/router';
import { TabsPageComponent } from './pages/tabs-page/tabs-page.component';
import { TabsPaginationPageComponent } from './pages/tabs-pagination-page/tabs-pagination-page.component';

export const routes: Routes = [
  { path: 'tabs', component: TabsPageComponent },
  { path: 'tabs-pagination', component: TabsPaginationPageComponent },
];
