import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPaginationFeatComponent } from './tabs-pagination-feat.component';

describe('TabsPaginationFeatComponent', () => {
  let component: TabsPaginationFeatComponent;
  let fixture: ComponentFixture<TabsPaginationFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsPaginationFeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsPaginationFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
