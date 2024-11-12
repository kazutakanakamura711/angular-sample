import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TabsComponentProps {
  tabs: string[];
  selectedTabIndex?: number; // 親から渡された場合に初期表示するタブのインデックス
  maxLabelLength?: number; // 省略文字数のオプション
}

@Component({
  selector: 'tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements OnInit, TabsComponentProps {
  @Input() tabs: string[] = [];
  @Input() selectedTabIndex?: number; // 親から受け取る初期インデックス
  @Input() maxLabelLength?: number; // 省略文字数のオプション

  @Output() selectedTabIndexChange = new EventEmitter<number>();

  ngOnInit() {
    // selectedTabIndex が undefined または null の場合は 0 に設定
    if (this.selectedTabIndex === null || this.selectedTabIndex === undefined) {
      this.selectedTabIndex = 0;
    }
    this.selectedTabIndexChange.emit(this.selectedTabIndex);
  }

  selectTab(index: number) {
    this.selectedTabIndex = index;
    this.selectedTabIndexChange.emit(this.selectedTabIndex);
  }

  isActive(index: number): boolean {
    return this.selectedTabIndex === index;
  }

  getTruncatedLabel(label: string): string {
    // maxLabelLength が未設定または 0 以下の場合は省略せずそのまま表示
    if (!this.maxLabelLength || this.maxLabelLength <= 0) {
      return label;
    }
    return label.length > this.maxLabelLength
      ? label.slice(0, this.maxLabelLength) + '...'
      : label;
  }
}
