import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorInfoWidgetComponent } from './author-info-widget.component';

describe('AuthorInfoWidgetComponent', () => {
  let component: AuthorInfoWidgetComponent;
  let fixture: ComponentFixture<AuthorInfoWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorInfoWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorInfoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
