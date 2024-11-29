import { Component } from '@angular/core';
import { HeaderFeatComponent } from '../../features/header-feat/header-feat.component';

@Component({
  selector: 'header-page',
  standalone: true,
  imports: [HeaderFeatComponent],
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.scss',
})
export class HeaderPageComponent {}
