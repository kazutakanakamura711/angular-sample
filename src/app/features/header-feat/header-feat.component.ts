import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'header-feat',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './header-feat.component.html',
  styleUrl: './header-feat.component.scss',
})
export class HeaderFeatComponent {}
