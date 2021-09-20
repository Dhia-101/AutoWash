import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { MilestoneCounterComponent } from './components/milestone-counter/milestone-counter.component';
import { PlanBoxComponent } from './components/plan-box/plan-box.component';


@NgModule({
  declarations: [ButtonComponent, MilestoneCounterComponent, PlanBoxComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    ButtonComponent,
    MilestoneCounterComponent,
    PlanBoxComponent
  ]
})
export class SharedModule { }
