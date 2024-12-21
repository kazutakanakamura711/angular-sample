import { Component } from '@angular/core';
import { InputFeatComponent } from '../../features/input-feat/input-feat.component';

@Component({
  selector: 'input-page',
  standalone: true,
  imports: [InputFeatComponent],
  templateUrl: './input-page.component.html',
  styleUrl: './input-page.component.scss',
})
export class InputPageComponent {}
