import { Component } from '@angular/core';

@Component({
  selector: 'notice',
  standalone: true,
  imports: [],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.scss',
})
export class NoticeComponent {
  notice = 'テストお知らせ';
  noticeCount = 3;
}
