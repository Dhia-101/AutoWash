import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { MilestoneCounterComponent } from './components/milestone-counter/milestone-counter.component';


@NgModule({
  declarations: [ButtonComponent, MilestoneCounterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
    exports: [
        ButtonComponent,
        MilestoneCounterComponent
    ]
})
export class SharedModule { }
