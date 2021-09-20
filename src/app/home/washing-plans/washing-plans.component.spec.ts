import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingPlansComponent } from './washing-plans.component';

describe('WashingPlansComponent', () => {
  let component: WashingPlansComponent;
  let fixture: ComponentFixture<WashingPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashingPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
