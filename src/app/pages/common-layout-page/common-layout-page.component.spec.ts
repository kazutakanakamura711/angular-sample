import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLayoutPageComponent } from './common-layout-page.component';

describe('CommonLayoutPageComponent', () => {
  let component: CommonLayoutPageComponent;
  let fixture: ComponentFixture<CommonLayoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonLayoutPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
