import { Routes } from '@angular/router';
import { SampleLinksPageComponent } from './pages/sample-links-page/sample-links-page.component';
import { TabsPageComponent } from './pages/tabs-page/tabs-page.component';
import { TabsPaginationPageComponent } from './pages/tabs-pagination-page/tabs-pagination-page.component';
import { FontSizeChangerPageComponent } from './pages/font-size-changer-page/font-size-changer-page.component';
import { TitlePageComponent } from './pages/title-page/title-page.component';
import { HeaderPageComponent } from './pages/header-page/header-page.component';
import { PullDownPageComponent } from './pages/pull-down-page/pull-down-page.component';
import { CheckboxPageComponent } from './pages/checkbox-page/checkbox-page.component';
import { NavigationMenuPageComponent } from './pages/navigation-menu-page/navigation-menu-page.component';
import { CommonLayoutPageComponent } from './pages/common-layout-page/common-layout-page.component';
import { SampleAFeatComponent } from './features/sample-a-feat/sample-a-feat.component';
import { SampleBFeatComponent } from './features/sample-b-feat/sample-b-feat.component';
import { SampleCFeatComponent } from './features/sample-c-feat/sample-c-feat.component';
import { ChildWindowFeatComponent } from './features/child-window-feat/child-window-feat.component';
import { InputPageComponent } from './pages/input-page/input-page.component';
import { ValidationPageComponent } from './pages/validation-page/validation-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'sample-links', pathMatch: 'full' },
  {
    path: 'sample-links',
    component: SampleLinksPageComponent,
    children: [
      {
        path: 'common-layout',
        component: CommonLayoutPageComponent,
        children: [
          {
            path: 'sampleA',
            component: SampleAFeatComponent,
          },
          {
            path: 'sampleB',
            component: SampleBFeatComponent,
          },
          {
            path: 'sampleC',
            component: SampleCFeatComponent,
          },
        ],
      },
      {
        path: 'child-window',
        component: ChildWindowFeatComponent,
        children: [
          {
            path: 'sampleA',
            component: SampleAFeatComponent,
          },
          {
            path: 'sampleB',
            component: SampleBFeatComponent,
          },
          {
            path: 'sampleC',
            component: SampleCFeatComponent,
          },
        ],
      },
      { path: 'input', component: InputPageComponent },
      { path: 'tabs', component: TabsPageComponent },
      { path: 'tabs-pagination', component: TabsPaginationPageComponent },
      { path: 'font-size-changer', component: FontSizeChangerPageComponent },
      { path: 'title', component: TitlePageComponent },
      { path: 'header', component: HeaderPageComponent },
      { path: 'pull-down', component: PullDownPageComponent },
      { path: 'checkbox', component: CheckboxPageComponent },
      { path: 'navigation-menu', component: NavigationMenuPageComponent },
      { path: 'validation', component: ValidationPageComponent },
    ],
  },
];
