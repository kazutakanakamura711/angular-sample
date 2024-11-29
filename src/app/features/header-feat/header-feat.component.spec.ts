import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFeatComponent } from './header-feat.component';

describe('HeaderFeatComponent', () => {
  let component: HeaderFeatComponent;
  let fixture: ComponentFixture<HeaderFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
