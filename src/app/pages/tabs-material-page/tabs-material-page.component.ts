import { Component } from '@angular/core';
import { TabsMaterialFeatComponent } from '../../features/tabs-material-feat/tabs-material-feat.component';

@Component({
  selector: 'tabs-material-page',
  standalone: true,
  imports: [TabsMaterialFeatComponent],
  templateUrl: './tabs-material-page.component.html',
  styleUrl: './tabs-material-page.component.scss',
})
export class TabsMaterialPageComponent {}
