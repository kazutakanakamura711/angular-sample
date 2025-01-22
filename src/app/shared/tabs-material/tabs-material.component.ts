import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

export interface Tab {
  label: string;
  isDisabled?: boolean;
}

@Component({
  selector: 'tabs-material',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs-material.component.html',
  styleUrls: ['./tabs-material.component.scss'],
})
export class TabsMaterialComponent implements OnInit {
  @Input() tabs: Tab[] = []; // 外部から渡されるタブデータ
  @Input() maxLabelLength?: number;
  @Input() maxVisibleTabs = 3; // 表示できる最大タブ数
  @Input() isDarkTheme?: boolean;

  selectedTabIndex = 0; // 現在選択されているタブのインデックス
  startIndex = 0; // ページネーションの開始インデックス

  ngOnInit() {
    if (this.tabs.length > 0) {
      this.selectedTabIndex = 0;
    }
  }

  selectTab(index: number) {
    this.selectedTabIndex = index;
  }

  goToPreviousPage() {
    if (this.startIndex > 0) {
      this.startIndex--;
    }
  }

  goToNextPage() {
    if (this.startIndex + this.maxVisibleTabs < this.tabs.length) {
      this.startIndex++;
    }
  }

  isTabVisible(index: number): boolean {
    return (
      index >= this.startIndex && index < this.startIndex + this.maxVisibleTabs
    );
  }

  goToFirstPage() {
    this.startIndex = 0;
  }

  goToLastPage() {
    this.startIndex = Math.max(0, this.tabs.length - this.maxVisibleTabs);
  }

  isActive(index: number): boolean {
    return this.selectedTabIndex === index;
  }

  getTruncatedLabel(label: string): { display: string; isTruncated: boolean } {
    const isTruncated =
      this.maxLabelLength != null && label.length > this.maxLabelLength;
    const display = isTruncated
      ? label.slice(0, this.maxLabelLength) + '...'
      : label;
    return { display, isTruncated };
  }

  getTooltipLabel(label: string): string | null {
    const truncatedLabel = this.getTruncatedLabel(label);
    return truncatedLabel.isTruncated ? label : null;
  }
}
