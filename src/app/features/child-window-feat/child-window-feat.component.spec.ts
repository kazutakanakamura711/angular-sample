import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWindowFeatComponent } from './child-window-feat.component';

describe('ChildWindowFeatComponent', () => {
  let component: ChildWindowFeatComponent;
  let fixture: ComponentFixture<ChildWindowFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildWindowFeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildWindowFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
