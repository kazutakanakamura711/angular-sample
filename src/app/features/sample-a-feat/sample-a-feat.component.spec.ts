import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleAFeatComponent } from './sample-a-feat.component';

describe('SampleAFeatComponent', () => {
  let component: SampleAFeatComponent;
  let fixture: ComponentFixture<SampleAFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleAFeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleAFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
