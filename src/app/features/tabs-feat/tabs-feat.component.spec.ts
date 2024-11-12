import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsFeatComponent } from './tabs-feat.component';

describe('TabsFeatComponent', () => {
  let component: TabsFeatComponent;
  let fixture: ComponentFixture<TabsFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsFeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
