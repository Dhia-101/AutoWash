import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedPostCarouselComponent } from './related-post-carousel.component';

describe('RelatedPostCarouselComponent', () => {
  let component: RelatedPostCarouselComponent;
  let fixture: ComponentFixture<RelatedPostCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedPostCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedPostCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
