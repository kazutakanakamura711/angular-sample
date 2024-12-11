import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleLinksPageComponent } from './sample-links-page.component';

describe('SampleLinksPageComponent', () => {
  let component: SampleLinksPageComponent;
  let fixture: ComponentFixture<SampleLinksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleLinksPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleLinksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
