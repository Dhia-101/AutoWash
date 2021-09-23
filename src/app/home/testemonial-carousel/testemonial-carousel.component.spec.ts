import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestemonialCarouselComponent } from './testemonial-carousel.component';

describe('TestemonialCarouselComponent', () => {
  let component: TestemonialCarouselComponent;
  let fixture: ComponentFixture<TestemonialCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestemonialCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestemonialCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
