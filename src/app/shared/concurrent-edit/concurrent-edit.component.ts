import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface EditingUser {
  department: string;
  userName: string;
}

@Component({
  selector: 'concurrent-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './concurrent-edit.component.html',
  styleUrl: './concurrent-edit.component.scss',
})
export class ConcurrentEditComponent {
  @Input() editingUsers: EditingUser[] = [];

  getUserBackgroundColor(index: number): string {
    switch (index) {
      case 0:
        return 'bg-[#E5ACAC]';
      case 1:
        return 'bg-[#9BD6BD]';
      case 2:
        return 'bg-[#93BED5]';
      default:
        return '';
    }
  }

  getTooltipText(user: EditingUser): string {
    return `${user.department} : ${user.userName}`;
  }

  getRemainingUsersTooltip(): string {
    // 4人目以降のユーザー名を取得して、改行で結合
    return this.editingUsers
      .slice(3) // 4人目以降のユーザーを取得
      .map((user) => `${user.department} : ${user.userName}`) // 所属と名前を結合
      .join('\n'); // 改行で区切る
  }
}
