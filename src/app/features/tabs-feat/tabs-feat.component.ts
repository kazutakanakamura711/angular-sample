import { Component } from '@angular/core';
import { Tab, TabsComponent } from '../../shared/tabs/tabs.component';
import { TabContent0Component } from './tab-content0/tab-content0.component';

@Component({
  selector: 'tabs-feat',
  standalone: true,
  imports: [TabsComponent, TabContent0Component],
  templateUrl: './tabs-feat.component.html',
  styleUrls: ['./tabs-feat.component.scss'],
})
export class TabsFeatComponent {
  tabs: Tab[] = [
    { label: 'タブ0' },
    { label: 'タブ1タブ1タブ1タブ1タブ1' },
    {
      label:
        'タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2タブ2',
      isDisabled: true,
    },
  ];

  // 初期表示のタブのIndex指定
  selectedTabIndex = 0;

  // 3点リーダーの文字数制限
  maxTabLabelLength = 10;

  // isDarkMode = true;
  isDarkMode = false;
}
