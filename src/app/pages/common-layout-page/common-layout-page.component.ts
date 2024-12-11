import { Component } from '@angular/core';
import { CommonLayoutFeatComponent } from '../../features/common-layout-feat/common-layout-feat.component';

@Component({
  selector: 'common-layout-page',
  standalone: true,
  imports: [CommonLayoutFeatComponent],
  templateUrl: './common-layout-page.component.html',
  styleUrl: './common-layout-page.component.scss',
})
export class CommonLayoutPageComponent {}
