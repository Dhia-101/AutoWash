import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingPointsComponent } from './washing-points.component';

describe('WashingPointsComponent', () => {
  let component: WashingPointsComponent;
  let fixture: ComponentFixture<WashingPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashingPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
