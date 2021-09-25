import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBlogSectionComponent } from './our-blog-section.component';

describe('OurBlogSectionComponent', () => {
  let component: OurBlogSectionComponent;
  let fixture: ComponentFixture<OurBlogSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBlogSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBlogSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
