import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestemonialSectionComponent } from './testemonial-section.component';

describe('TestemonialCarouselComponent', () => {
  let component: TestemonialSectionComponent;
  let fixture: ComponentFixture<TestemonialSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestemonialSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestemonialSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
