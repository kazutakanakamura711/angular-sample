import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsMaterialFeatComponent } from './tabs-material-feat.component';

describe('TabsMaterialFeatComponent', () => {
  let component: TabsMaterialFeatComponent;
  let fixture: ComponentFixture<TabsMaterialFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsMaterialFeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsMaterialFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
