import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationFeatComponent } from './validation-feat.component';

describe('ValidationFeatComponent', () => {
  let component: ValidationFeatComponent;
  let fixture: ComponentFixture<ValidationFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationFeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
