import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneCounterComponent } from './milestone-counter.component';

describe('MilestoneCounterComponent', () => {
  let component: MilestoneCounterComponent;
  let fixture: ComponentFixture<MilestoneCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilestoneCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestoneCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
