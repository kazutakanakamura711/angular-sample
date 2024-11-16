import { Component } from '@angular/core';
import { TabsPaginationFeatComponent } from '../../features/tabs-pagination-feat/tabs-pagination-feat.component';

@Component({
  selector: 'tabs-pagination-page',
  standalone: true,
  imports: [TabsPaginationFeatComponent],
  templateUrl: './tabs-pagination-page.component.html',
  styleUrl: './tabs-pagination-page.component.scss',
})
export class TabsPaginationPageComponent {}
