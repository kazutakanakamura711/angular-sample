import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFeatComponent } from './input-feat.component';

describe('InputFeatComponent', () => {
  let component: InputFeatComponent;
  let fixture: ComponentFixture<InputFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
