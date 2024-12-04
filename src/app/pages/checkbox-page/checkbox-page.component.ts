import { Component } from '@angular/core';
import { CheckboxFeatComponent } from '../../features/checkbox-feat/checkbox-feat.component';

@Component({
  selector: 'checkbox-page',
  standalone: true,
  imports: [CheckboxFeatComponent],
  templateUrl: './checkbox-page.component.html',
  styleUrl: './checkbox-page.component.scss',
})
export class CheckboxPageComponent {}
