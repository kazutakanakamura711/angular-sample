import { Component } from '@angular/core';
import { SampleApiFeatComponent } from '../../features/sample-api-feat/sample-api-feat.component';

@Component({
  selector: 'app-sample-api-page',
  standalone: true,
  imports: [SampleApiFeatComponent],
  templateUrl: './sample-api-page.component.html',
  styleUrl: './sample-api-page.component.scss',
})
export class SampleApiPageComponent {}
