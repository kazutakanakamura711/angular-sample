import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLayoutFeatComponent } from './common-layout-feat.component';

describe('CommonLayoutFeatComponent', () => {
  let component: CommonLayoutFeatComponent;
  let fixture: ComponentFixture<CommonLayoutFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonLayoutFeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonLayoutFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
