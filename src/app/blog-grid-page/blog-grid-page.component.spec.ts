import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridPageComponent } from './blog-grid-page.component';

describe('BlogGridPageComponent', () => {
  let component: BlogGridPageComponent;
  let fixture: ComponentFixture<BlogGridPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogGridPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
