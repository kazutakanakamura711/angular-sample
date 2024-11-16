import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPaginationPageComponent } from './tabs-pagination-page.component';

describe('TabsPaginationPageComponent', () => {
  let component: TabsPaginationPageComponent;
  let fixture: ComponentFixture<TabsPaginationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsPaginationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsPaginationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
