import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersPageComponent } from './team-members-page.component';

describe('TeamMembersPageComponent', () => {
  let component: TeamMembersPageComponent;
  let fixture: ComponentFixture<TeamMembersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMembersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMembersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
