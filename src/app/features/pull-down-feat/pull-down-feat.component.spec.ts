import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullDownFeatComponent } from './pull-down-feat.component';

describe('PullDownFeatComponent', () => {
  let component: PullDownFeatComponent;
  let fixture: ComponentFixture<PullDownFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PullDownFeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PullDownFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
