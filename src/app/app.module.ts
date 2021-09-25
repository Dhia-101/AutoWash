import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopInfoBandComponent } from './home/top-info-band/top-info-band.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { CarouselComponent } from './home/carousel/carousel.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AboutUsSectionComponent } from './home/about-us-section/about-us-section.component';
import { WhatWeDoSectionComponent } from './home/what-we-do-section/what-we-do-section.component';
import { MilestonesSectionComponent } from './home/milestones-section/milestones-section.component';
import { WashingPlansComponent } from './home/washing-plans/washing-plans.component';
import { CarWashingPointsSectionComponent } from './home/car-washing-points-section/car-washing-points-section.component';
import { MeetOurTeamSectionComponent } from './home/meet-our-team-section/meet-our-team-section.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TestemonialSectionComponent } from './home/testemonial-section/testemonial-section.component';
import { OurBlogSectionComponent } from './home/our-blog-section/our-blog-section.component';
import { FooterComponent } from './home/footer/footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { PricePageComponent } from './price-page/price-page.component';
import { WashingPointsComponent } from './washing-points/washing-points.component';
import { BlogGridPageComponent } from './blog-grid-page/blog-grid-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { TeamMembersPageComponent } from './team-members-page/team-members-page.component';
import { ScheduleBookingPageComponent } from './schedule-booking-page/schedule-booking-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopInfoBandComponent,
    NavBarComponent,
    CarouselComponent,
    AboutUsSectionComponent,
    WhatWeDoSectionComponent,
    MilestonesSectionComponent,
    WashingPlansComponent,
    CarWashingPointsSectionComponent,
    MeetOurTeamSectionComponent,
    TestemonialSectionComponent,
    OurBlogSectionComponent,
    FooterComponent,
    AboutPageComponent,
    ServicePageComponent,
    PricePageComponent,
    WashingPointsComponent,
    BlogGridPageComponent,
    DetailPageComponent,
    TeamMembersPageComponent,
    ScheduleBookingPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
