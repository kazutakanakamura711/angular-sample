import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCFeatComponent } from './sample-c-feat.component';

describe('SampleCFeatComponent', () => {
  let component: SampleCFeatComponent;
  let fixture: ComponentFixture<SampleCFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleCFeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleCFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
