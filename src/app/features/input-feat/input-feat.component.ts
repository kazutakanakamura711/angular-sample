import { Component } from '@angular/core';
import { InputComponent } from '../../shared/input/input.component';
import { InputType } from '../../shared/input/types';

@Component({
  selector: 'input-feat',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './input-feat.component.html',
  styleUrl: './input-feat.component.scss',
})
export class InputFeatComponent {
  InputType = InputType;
  isDarkTheme = true;
  maxLength = 10;
  textareaWidth = '256px';
  textareaHeight = '256px';
}
