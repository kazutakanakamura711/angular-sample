import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-content0',
  standalone: true,
  imports: [],
  templateUrl: './tab-content0.component.html',
  styleUrl: './tab-content0.component.scss',
})
export class TabContent0Component {
  @Input() text: string = ''; // 親から受け取るプロパティに @Input を追加
}
