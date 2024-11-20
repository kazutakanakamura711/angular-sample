import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizeChangerFeatComponent } from './font-size-changer-feat.component';

describe('FontSizeChangerFeatComponent', () => {
  let component: FontSizeChangerFeatComponent;
  let fixture: ComponentFixture<FontSizeChangerFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontSizeChangerFeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontSizeChangerFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
