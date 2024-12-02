import { Component } from '@angular/core';
import { CheckboxComponent } from '../../shared/checkbox/checkbox.component';

@Component({
  selector: 'checkbox-feat',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './checkbox-feat.component.html',
  styleUrl: './checkbox-feat.component.scss',
})
export class CheckboxFeatComponent {}
