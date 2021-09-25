import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoSectionComponent } from './what-we-do-section.component';

describe('WhatWeDoSectionComponent', () => {
  let component: WhatWeDoSectionComponent;
  let fixture: ComponentFixture<WhatWeDoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatWeDoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeDoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
