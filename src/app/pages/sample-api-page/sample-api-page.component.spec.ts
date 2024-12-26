import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleApiPageComponent } from './sample-api-page.component';

describe('SampleApiPageComponent', () => {
  let component: SampleApiPageComponent;
  let fixture: ComponentFixture<SampleApiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleApiPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleApiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
