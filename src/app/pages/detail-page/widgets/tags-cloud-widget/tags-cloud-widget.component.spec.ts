import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsCloudWidgetComponent } from './tags-cloud-widget.component';

describe('TagsCloudWidgetComponent', () => {
  let component: TagsCloudWidgetComponent;
  let fixture: ComponentFixture<TagsCloudWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsCloudWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsCloudWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
