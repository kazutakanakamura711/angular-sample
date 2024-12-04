import { Component } from '@angular/core';
import {
  Checkbox,
  CheckboxComponent,
} from '../../shared/checkbox/checkbox.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'checkbox-feat',
  standalone: true,
  imports: [CommonModule, CheckboxComponent],
  templateUrl: './checkbox-feat.component.html',
  styleUrl: './checkbox-feat.component.scss',
})
export class CheckboxFeatComponent {
  // チェックボックス(単体)のサンプル
  singleCheckboxes: Checkbox[] = [
    {
      value: 'AAATS00',
      label: 'テスト0画面',
      name: 'single',
      isChecked: false,
    },
  ];
  // チェックボックス(複数)のサンプル
  mulchCheckboxes: Checkbox[] = [
    {
      value: 'AAATS01',
      label: 'テスト1画面',
      name: 'mulch',
      isChecked: false,
    },
    {
      value: 'AAATS02',
      label: 'テスト2画面',
      name: 'mulch',
      isChecked: false,
    },
    {
      value: 'AAATS03',
      label: 'テスト3画面',
      name: 'mulch',
      isChecked: false,
    },
    {
      value: 'AAATS04',
      label: 'テスト4画面',
      name: 'mulch',
      isChecked: false,
      isDisabled: true,
    },
  ];

  isDarkTheme = false;

  onChangeSingleTypeCheckbox(index: number, checked: boolean) {
    this.singleCheckboxes[index].isChecked = checked;
  }

  onChangeMulchTypeCheckbox(index: number, checked: boolean) {
    this.mulchCheckboxes[index].isChecked = checked;
  }
}
