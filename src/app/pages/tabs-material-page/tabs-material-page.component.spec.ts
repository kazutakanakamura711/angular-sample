import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsMaterialPageComponent } from './tabs-material-page.component';

describe('TabsMaterialPageComponent', () => {
  let component: TabsMaterialPageComponent;
  let fixture: ComponentFixture<TabsMaterialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsMaterialPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsMaterialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
