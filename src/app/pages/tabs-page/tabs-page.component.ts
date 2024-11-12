import { Component } from '@angular/core';
import { TabsFeatComponent } from '../../features/tabs-feat/tabs-feat.component';

@Component({
  selector: 'tabs-page',
  standalone: true,
  imports: [TabsFeatComponent],
  templateUrl: './tabs-page.component.html',
  styleUrl: './tabs-page.component.scss',
})
export class TabsPageComponent {}
