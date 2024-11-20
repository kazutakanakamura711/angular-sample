import { Component } from '@angular/core';
import { FontSizeChangerFeatComponent } from '../../features/font-size-changer-feat/font-size-changer-feat.component';

@Component({
  selector: 'font-size-changer-page',
  standalone: true,
  imports: [FontSizeChangerFeatComponent],
  templateUrl: './font-size-changer-page.component.html',
  styleUrl: './font-size-changer-page.component.scss',
})
export class FontSizeChangerPageComponent {}
