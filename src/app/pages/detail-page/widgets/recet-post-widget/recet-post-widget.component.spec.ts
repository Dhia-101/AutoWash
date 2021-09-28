import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetPostWidgetComponent } from './recet-post-widget.component';

describe('RecetPostWidgetComponent', () => {
  let component: RecetPostWidgetComponent;
  let fixture: ComponentFixture<RecetPostWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetPostWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetPostWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
