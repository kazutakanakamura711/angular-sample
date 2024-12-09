import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationMenuComponent } from '../../shared/navigation-menu/navigation-menu.component';

@Component({
  selector: 'navigation-menu-feat',
  standalone: true,
  imports: [CommonModule, NavigationMenuComponent],
  templateUrl: './navigation-menu-feat.component.html',
  styleUrl: './navigation-menu-feat.component.scss',
})
export class NavigationMenuFeatComponent {}
