import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPaginationComponent } from './tabs-pagination.component';

describe('TabsPaginationComponent', () => {
  let component: TabsPaginationComponent;
  let fixture: ComponentFixture<TabsPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
