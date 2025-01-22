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
  styleUrl: './tabs-material.component.scss',
})
export class TabsMaterialComponent implements OnInit {
  @Input() tabs: Tab[] = [];
  @Input() maxLabelLength?: number;
  @Input() isDarkTheme?: boolean;

  selectedTabIndex = 0;

  ngOnInit() {
    if (this.tabs.length > 0) {
      this.selectedTabIndex = 0;
    }
  }

  private getTabListElement(): HTMLElement | null {
    const tabListElement = document.querySelector(
      '.js-tabs-container',
    ) as HTMLElement;
    if (!tabListElement) return null;
    return tabListElement;
  }

  goToNext() {
    const tabListElement = this.getTabListElement();
    if (!tabListElement) return;

    const scrollAmount = 256;
    const maxScrollLeft =
      tabListElement.scrollWidth - tabListElement.clientWidth;

    const newScrollLeft = Math.min(
      tabListElement.scrollLeft + scrollAmount,
      maxScrollLeft,
    );

    tabListElement.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  }

  goToPrevious() {
    const tabListElement = this.getTabListElement();
    if (!tabListElement) return;

    const scrollAmount = 256;
    const newScrollLeft = Math.max(tabListElement.scrollLeft - scrollAmount, 0);

    tabListElement.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  }

  goToFirst() {
    const tabListElement = this.getTabListElement();
    if (!tabListElement) return;

    tabListElement.scrollTo({ left: 0, behavior: 'smooth' });
  }

  goToLast() {
    const tabListElement = this.getTabListElement();
    if (!tabListElement) return;

    const maxScrollLeft =
      tabListElement.scrollWidth - tabListElement.clientWidth;

    tabListElement.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
  }

  selectTab(index: number) {
    this.selectedTabIndex = index;
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
