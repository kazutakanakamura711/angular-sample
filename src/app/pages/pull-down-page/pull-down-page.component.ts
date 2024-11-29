import { Component } from '@angular/core';
import { PullDownFeatComponent } from '../../features/pull-down-feat/pull-down-feat.component';

@Component({
  selector: 'pull-down-page',
  standalone: true,
  imports: [PullDownFeatComponent],
  templateUrl: './pull-down-page.component.html',
  styleUrl: './pull-down-page.component.scss',
})
export class PullDownPageComponent {}
