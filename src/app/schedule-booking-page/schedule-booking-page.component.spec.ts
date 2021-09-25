import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleBookingPageComponent } from './schedule-booking-page.component';

describe('ScheduleBookingPageComponent', () => {
  let component: ScheduleBookingPageComponent;
  let fixture: ComponentFixture<ScheduleBookingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleBookingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleBookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
