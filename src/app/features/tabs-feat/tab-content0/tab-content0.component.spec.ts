import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContent0Component } from './tab-content0.component';

describe('TabContent0Component', () => {
  let component: TabContent0Component;
  let fixture: ComponentFixture<TabContent0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabContent0Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabContent0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
