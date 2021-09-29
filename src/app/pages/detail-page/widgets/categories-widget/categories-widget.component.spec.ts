import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesWidgetComponent } from './categories-widget.component';

describe('CategoriesWidgetComponent', () => {
  let component: CategoriesWidgetComponent;
  let fixture: ComponentFixture<CategoriesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
