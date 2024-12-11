import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuFeatComponent } from './navigation-menu-feat.component';

describe('NavigationMenuFeatComponent', () => {
  let component: NavigationMenuFeatComponent;
  let fixture: ComponentFixture<NavigationMenuFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationMenuFeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationMenuFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
