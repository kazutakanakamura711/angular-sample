import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Tab {
  label: string;
  isDisabled?: boolean;
}

interface TabsComponentProps {
  tabs: Tab[];
  selectedTabIndex?: number;
  maxLabelLength?: number;
}

@Component({
  selector: 'tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit, TabsComponentProps {
  @Input() tabs: Tab[] = [];
  @Input() selectedTabIndex?: number;
  @Input() maxLabelLength?: number;
  @Output() selectedTabIndexChange = new EventEmitter<number>();

  ngOnInit() {
    if (this.selectedTabIndex === null || this.selectedTabIndex === undefined) {
      this.selectedTabIndex = 0;
    }
    this.selectedTabIndexChange.emit(this.selectedTabIndex);
  }

  selectTab(index: number) {
    if (this.tabs[index].isDisabled) return; // タブが非活性の場合は何もしない
    this.selectedTabIndex = index;
    this.selectedTabIndexChange.emit(this.selectedTabIndex);
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
