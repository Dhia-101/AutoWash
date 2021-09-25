import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetOurTeamSectionComponent } from './meet-our-team-section.component';

describe('MeetOurTeamSectionComponent', () => {
  let component: MeetOurTeamSectionComponent;
  let fixture: ComponentFixture<MeetOurTeamSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetOurTeamSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetOurTeamSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
