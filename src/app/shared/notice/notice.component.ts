import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'notice',
  standalone: true,
  imports: [],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.scss',
})
export class NoticeComponent {
  constructor(private router: Router) {}
  notice: string = 'テストお知らせ';
  noticeCount: number = 3;
  isVisible: boolean = true;

  ngOnInit(): void {
    if (this.notice) return;
    this.isVisible = false;
  }

  onCloseNotice(): void {
    this.isVisible = false;
  }

  navigate(): void {
    this.router.navigate(['/']);
  }
}
