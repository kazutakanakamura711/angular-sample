import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'sample-links-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sample-links-page.component.html',
  styleUrl: './sample-links-page.component.scss',
})
export class SampleLinksPageComponent {
  constructor(private router: Router) {}

  links = [
    { path: 'common-layout', name: 'Common Layout Page' },
    { path: 'tabs', name: 'Tabs Page' },
    { path: 'tabs-pagination', name: 'Tabs Pagination Page' },
    { path: 'font-size-changer', name: 'Font Size Changer Page' },
    { path: 'title', name: 'Title Page' },
    { path: 'header', name: 'Header Page' },
    { path: 'pull-down', name: 'Pull Down Page' },
    { path: 'checkbox', name: 'Checkbox Page' },
    { path: 'navigation-menu', name: 'Navigation Menu Page' },
  ];

  isSampleLinksPath(): boolean {
    console.log(this.router.url);
    return this.router.url === '/sample-links';
  }

  navigate(path: string): void {
    this.router.navigate([path]);
  }
}
