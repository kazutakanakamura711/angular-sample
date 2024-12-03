import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxFeatComponent } from './checkbox-feat.component';

describe('CheckboxFeatComponent', () => {
  let component: CheckboxFeatComponent;
  let fixture: ComponentFixture<CheckboxFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxFeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
