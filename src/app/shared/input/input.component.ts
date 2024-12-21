import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputType } from './types';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  InputType = InputType;
  @Input() isDarkTheme?: boolean;
  @Input() inputType: string = '';
  @Input() modelValue: string = '';
  @Input() maxLength: number = 0;
  @Input() textareaWidth: string = 'auto';
  @Input() textareaHeight: string = 'auto';
  @Input() inputWidth: string = '100%';

  @Output() save: EventEmitter<string> = new EventEmitter<string>();

  isEditing: boolean = false;
  originalValue: string = '';

  startEditing() {
    this.originalValue = this.modelValue;
    this.isEditing = true;
  }

  clearInput() {
    this.modelValue = '';
  }

  confirmInput() {
    this.save.emit(this.modelValue);
    this.isEditing = false;
  }
}
