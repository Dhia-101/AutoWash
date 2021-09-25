import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopInfoBandComponent } from './top-info-band.component';

describe('TopInfoBandComponent', () => {
  let component: TopInfoBandComponent;
  let fixture: ComponentFixture<TopInfoBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopInfoBandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopInfoBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
