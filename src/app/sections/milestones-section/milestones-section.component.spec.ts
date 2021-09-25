import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestonesSectionComponent } from './milestones-section.component';

describe('MilestonesSectionComponent', () => {
  let component: MilestonesSectionComponent;
  let fixture: ComponentFixture<MilestonesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilestonesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestonesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
