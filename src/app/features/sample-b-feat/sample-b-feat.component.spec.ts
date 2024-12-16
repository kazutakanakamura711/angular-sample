import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleBFeatComponent } from './sample-b-feat.component';

describe('SampleBFeatComponent', () => {
  let component: SampleBFeatComponent;
  let fixture: ComponentFixture<SampleBFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleBFeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleBFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
