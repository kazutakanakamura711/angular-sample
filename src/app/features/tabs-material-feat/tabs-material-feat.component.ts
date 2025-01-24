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
    { label: 'TestTestTest Tab 1' },
    { label: 'Test Tab 2' },
    { label: 'Test Tab 3', isDisabled: true },
    { label: 'TestTestTestTest Tab 4' },
    { label: 'Test Tab 5' },
    { label: 'TestTestTest Tab 6' },
    { label: 'TestTest Tab 7' },
    { label: 'Test Tab 8' },
    { label: 'Test Tab 9', isDisabled: true },
    { label: 'TestTestTest Tab 10' },
    { label: 'Test Tab 11' },
    { label: 'Test Tab 12' },
  ];
  maxLabelLength = 18;
  darkTabs: Tab[] = [
    { label: 'TestTestTest Tab 1' },
    { label: 'Test Tab 2' },
    { label: 'Test Tab 3', isDisabled: true },
    { label: 'TestTestTestTest Tab 4' },
    { label: 'Test Tab 5' },
    { label: 'TestTestTest Tab 6' },
    { label: 'TestTest Tab 7' },
    { label: 'Test Tab 8' },
    { label: 'Test Tab 9', isDisabled: true },
    { label: 'TestTestTest Tab 10' },
    { label: 'Test Tab 11' },
    { label: 'Test Tab 12' },
  ];
  isDarkTheme = true;
}
