import { Component } from '@angular/core';
import { InputComponent } from '../../shared/input/input.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  checkRequiredForText,
  checkNumChars,
  checkEmailFormat,
} from '../../utilities/validation/common.validation';
import { InputType } from '../../shared/input/types';

@Component({
  selector: 'validation-feat',
  standalone: true,
  imports: [InputComponent, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './validation-feat.component.html',
  styleUrl: './validation-feat.component.scss',
})
export class ValidationFeatComponent {
  InputType = InputType;
  userForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [checkRequiredForText, checkNumChars(2, 10)]],
      email: ['', [checkRequiredForText, checkEmailFormat]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.userForm.valid) return;
    console.log('送信しました。', this.userForm.value);
  }

  hasError(controlName: string, errorName: string): boolean {
    const control = this.userForm.get(controlName);
    return this.submitted && control?.invalid && control?.errors?.[errorName];
  }
}
