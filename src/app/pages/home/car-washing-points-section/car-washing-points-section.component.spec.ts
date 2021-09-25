import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarWashingPointsSectionComponent } from './car-washing-points-section.component';

describe('CarWashingPointsSectionComponent', () => {
  let component: CarWashingPointsSectionComponent;
  let fixture: ComponentFixture<CarWashingPointsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarWashingPointsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarWashingPointsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
