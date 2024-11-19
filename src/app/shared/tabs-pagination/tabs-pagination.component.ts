import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

export interface Tab {
  label: string;
  isDisabled?: boolean;
}

interface TabsPaginationComponentProps {
  tabs: Tab[];
  selectedTabIndex?: number;
  maxLabelLength?: number;
  isDarkMode?: boolean;
}

@Component({
  selector: 'tabs-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs-pagination.component.html',
  styleUrl: './tabs-pagination.component.scss',
})
export class TabsPaginationComponent
  implements OnInit, TabsPaginationComponentProps
{
  @Input() tabs: Tab[] = [];
  @Input() selectedTabIndex?: number;
  @Input() maxLabelLength?: number;
  @Input() isDarkMode?: boolean;
  @Output() selectedTabIndexChange = new EventEmitter<number>();

  ngOnInit() {
    if (this.selectedTabIndex === null || this.selectedTabIndex === undefined) {
      this.selectedTabIndex = 0;
    }
    this.selectedTabIndexChange.emit(this.selectedTabIndex);
  }

  selectTab(index: number) {
    if (this.tabs[index]?.isDisabled) return; // タブが非活性の場合は何もしない
    this.selectedTabIndex = index;
    this.selectedTabIndexChange.emit(this.selectedTabIndex);
    this.scrollToTab(index); // 選択したタブにスクロール
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

  goToFirst() {
    this.selectTab(0);
    this.scrollToTab(0);
  }

  goToLast() {
    const lastIndex = this.tabs.length - 1;
    this.selectTab(lastIndex);
    this.scrollToTab(lastIndex);
  }

  // 指定したインデックスから次の有効なタブ（isDisabled が false）を探す再帰関数
  findNextIndex(index: number): number | null {
    if (index >= this.tabs.length) return null; // 次が見つからない場合、null を返す
    // タブが無効（isDisabled = true）の場合は再帰的に次を探す
    return this.tabs[index].isDisabled ? this.findNextIndex(index + 1) : index;
  }

  // 指定したインデックスから前の有効なタブ（isDisabled が false）を探す再帰関数
  findPrevIndex(index: number): number | null {
    if (index < 0) return null; // 前が見つからない場合、null を返す
    // タブが無効（isDisabled = true）の場合は再帰的に前を探す
    return this.tabs[index].isDisabled ? this.findPrevIndex(index - 1) : index;
  }

  // 現在選択中のタブから次の有効なタブに移動する関数
  goToNext() {
    if (this.selectedTabIndex === undefined) return;
    const nextIndex = this.findNextIndex(this.selectedTabIndex + 1);
    if (nextIndex === null) return;
    this.selectTab(nextIndex);
    this.scrollToTab(nextIndex);
  }

  // 現在選択中のタブから前の有効なタブに移動する関数
  goToPrevious() {
    if (this.selectedTabIndex === undefined) return;
    const prevIndex = this.findPrevIndex(this.selectedTabIndex - 1);
    if (prevIndex === null) return;
    this.selectTab(prevIndex);
    this.scrollToTab(prevIndex);
  }

  // 選択したタブに合わせてスクロールし追従する関数
  scrollToTab(index: number) {
    const tabListElement = document.querySelector('.js-tab-list');
    const tabElement = document.querySelectorAll('.js-tab-item')[index];

    if (!(tabListElement && tabElement)) return;
    tabElement.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }
}
