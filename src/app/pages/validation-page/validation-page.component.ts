import { Component } from '@angular/core';
import { ValidationFeatComponent } from '../../features/validation-feat/validation-feat.component';

@Component({
  selector: 'validation-page',
  standalone: true,
  imports: [ValidationFeatComponent],
  templateUrl: './validation-page.component.html',
  styleUrl: './validation-page.component.scss',
})
export class ValidationPageComponent {}
