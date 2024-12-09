import { Component } from '@angular/core';
import { NavigationMenuFeatComponent } from '../../features/navigation-menu-feat/navigation-menu-feat.component';

@Component({
  selector: 'navigation-menu-page',
  standalone: true,
  imports: [NavigationMenuFeatComponent],
  templateUrl: './navigation-menu-page.component.html',
  styleUrl: './navigation-menu-page.component.scss',
})
export class NavigationMenuPageComponent {}
