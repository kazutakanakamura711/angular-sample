import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullDownPageComponent } from './pull-down-page.component';

describe('PullDownPageComponent', () => {
  let component: PullDownPageComponent;
  let fixture: ComponentFixture<PullDownPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PullDownPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PullDownPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
