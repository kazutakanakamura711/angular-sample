import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcurrentEditComponent } from './concurrent-edit.component';

describe('ConcurrentEditComponent', () => {
  let component: ConcurrentEditComponent;
  let fixture: ComponentFixture<ConcurrentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcurrentEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcurrentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
