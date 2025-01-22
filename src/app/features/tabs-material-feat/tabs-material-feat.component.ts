import { Component } from '@angular/core';
import {
  TabsMaterialComponent,
  Tab,
} from '../../shared/tabs-material/tabs-material.component';

@Component({
  selector: 'tabs-material-feat',
  standalone: true,
  imports: [TabsMaterialComponent],
  templateUrl: './tabs-material-feat.component.html',
  styleUrls: ['./tabs-material-feat.component.scss'],
})
export class TabsMaterialFeatComponent {
  tabs: Tab[] = [
    { label: 'Test Tab 1' },
    { label: 'Test Tab 2' },
    { label: 'Test Tab 3', isDisabled: true },
    { label: 'Test Tab 4' },
    { label: 'Test Tab 5' },
    { label: 'Test Tab 6' },
    { label: 'Test Tab 7' },
    { label: 'Test Tab 8' },
    { label: 'Test Tab 9', isDisabled: true },
    { label: 'Test Tab 10' },
    { label: 'Test Tab 11' },
    { label: 'Test Tab 12' },
  ];
}
