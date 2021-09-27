import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveCommentFormSectionComponent } from './leave-comment-form-section.component';

describe('LeaveCommentFormSectionComponent', () => {
  let component: LeaveCommentFormSectionComponent;
  let fixture: ComponentFixture<LeaveCommentFormSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveCommentFormSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveCommentFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
