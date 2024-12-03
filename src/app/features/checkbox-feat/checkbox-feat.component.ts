import { Component } from '@angular/core';
import { CheckboxComponent } from '../../shared/checkbox/checkbox.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'checkbox-feat',
  standalone: true,
  imports: [CommonModule, CheckboxComponent],
  templateUrl: './checkbox-feat.component.html',
  styleUrl: './checkbox-feat.component.scss',
})
export class CheckboxFeatComponent {
  // チェックボックスの状態を個別に管理するため、配列を使用
  checkboxes = [
    {
      value: 'AAATS01',
      label: 'テスト1画面',
      name: 'display',
      isChecked: false,
    },
    {
      value: 'AAATS02',
      label: 'テスト2画面',
      name: 'display',
      isChecked: false,
    },
    {
      value: 'AAATS03',
      label: 'テスト3画面',
      name: 'display',
      isChecked: false,
    },
    {
      value: 'AAATS04',
      label: 'テスト4画面',
      name: 'display',
      isChecked: false,
    },
    {
      value: 'AAATS05',
      label: 'テスト5画面',
      name: 'display',
      isChecked: false,
    },
    {
      value: 'AAATS06',
      label: 'テスト6画面',
      name: 'display',
      isChecked: false,
    },
    {
      value: 'AAATS07',
      label: 'テスト7画面',
      name: 'display',
      isChecked: false,
    },
  ];

  onChangeCheckbox(index: number, checked: boolean) {
    this.checkboxes[index].isChecked = checked;
  }
}
