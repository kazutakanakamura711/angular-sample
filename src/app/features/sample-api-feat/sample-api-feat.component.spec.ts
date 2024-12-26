import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleApiFeatComponent } from './sample-api-feat.component';

describe('SampleApiFeatComponent', () => {
  let component: SampleApiFeatComponent;
  let fixture: ComponentFixture<SampleApiFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleApiFeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleApiFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
