import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullDownComponent } from './pull-down.component';

describe('PullDownComponent', () => {
  let component: PullDownComponent;
  let fixture: ComponentFixture<PullDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PullDownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PullDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
