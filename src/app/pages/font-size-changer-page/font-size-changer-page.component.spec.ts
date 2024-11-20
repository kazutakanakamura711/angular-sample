import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizeChangerPageComponent } from './font-size-changer-page.component';

describe('FontSizeChangerPageComponent', () => {
  let component: FontSizeChangerPageComponent;
  let fixture: ComponentFixture<FontSizeChangerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontSizeChangerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontSizeChangerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
