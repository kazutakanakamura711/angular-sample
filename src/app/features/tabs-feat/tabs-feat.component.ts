import { Component } from '@angular/core';
import { TabsComponent } from '../../shared/tabs/tabs.component';

@Component({
  selector: 'tabs-feat',
  standalone: true,
  imports: [TabsComponent],
  templateUrl: './tabs-feat.component.html',
  styleUrls: ['./tabs-feat.component.scss'],
})
export class TabsFeatComponent {
  tabs: string[] = ['タブ0タブ0タブ0タブ0タブ0タブ0タブ0', 'タブ1', 'タブ2'];

  // 初期表示のタブのIndex指定
  selectedTabIndex = 2;
  // 3点リーダーの文字数制限
  maxTabLabelLength = 8;
}
