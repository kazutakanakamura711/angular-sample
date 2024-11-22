import { Component } from '@angular/core';
import { TitleFeatComponent } from '../../features/title-feat/title-feat.component';

@Component({
  selector: 'title-page',
  standalone: true,
  imports: [TitleFeatComponent],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.scss',
})
export class TitlePageComponent {}
