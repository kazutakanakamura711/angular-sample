import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleFeatComponent } from './title-feat.component';

describe('TitleFeatComponent', () => {
  let component: TitleFeatComponent;
  let fixture: ComponentFixture<TitleFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleFeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
