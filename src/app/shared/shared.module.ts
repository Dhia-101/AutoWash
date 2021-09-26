import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { MilestoneCounterComponent } from './components/milestone-counter/milestone-counter.component';
import { PlanBoxComponent } from './components/plan-box/plan-box.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { PageNavComponent } from './components/page-nav/page-nav.component';
import { SectionTemplateComponent } from './template-components/section-template/section-template.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
    ButtonComponent,
    MilestoneCounterComponent,
    PlanBoxComponent,
    PersonCardComponent,
    ArticleCardComponent,
    PageNavComponent,
    SectionTemplateComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
    exports: [
        ButtonComponent,
        MilestoneCounterComponent,
        PlanBoxComponent,
        PersonCardComponent,
        ArticleCardComponent,
        PageNavComponent,
        SectionTemplateComponent,
        PaginationComponent
    ]
})
export class SharedModule { }
