import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type AreaType = 'All' | 'Area';

interface AreaCategory {
  type: AreaType;
  area?: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuVisible = false;
  department: string = '〇〇〇〇局';
  userName: string = '田中一郎';
  businessRole: string = '責任者';
  category: AreaCategory = {
    type: 'Area',
    area: '北海道',
  };

  // メニュー表示/非表示の切り替え
  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  // ポータル画面への遷移
  goToPortal(): void {
    console.log('Navigating to the portal screen...');
    this.isMenuVisible = false;
    // ポータル画面への遷移処理
    // 例: this.router.navigate(['/portal']);
  }

  // サブシステム終了処理
  exitingSubsystem(): void {
    console.log('Exiting the subsystem...');
    this.isMenuVisible = false;
    // サブシステム終了処理
    // 例: this.logoutService.logout();
  }
}
