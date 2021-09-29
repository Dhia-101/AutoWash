import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPostWidgetComponent } from './recent-post-widget.component';

describe('RecetPostWidgetComponent', () => {
  let component: RecentPostWidgetComponent;
  let fixture: ComponentFixture<RecentPostWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentPostWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentPostWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
