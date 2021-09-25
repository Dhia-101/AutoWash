import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TopInfoBandComponent } from './layout-components/top-info-band/top-info-band.component';
import { NavBarComponent } from './layout-components/nav-bar/nav-bar.component';
import { CarouselComponent } from './pages/home/carousel/carousel.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AboutUsSectionComponent } from './pages/home/about-us-section/about-us-section.component';
import { WhatWeDoSectionComponent } from './pages/home/what-we-do-section/what-we-do-section.component';
import { MilestonesSectionComponent } from './pages/home/milestones-section/milestones-section.component';
import { WashingPlansComponent } from './pages/home/washing-plans/washing-plans.component';
import { CarWashingPointsSectionComponent } from './pages/home/car-washing-points-section/car-washing-points-section.component';
import { MeetOurTeamSectionComponent } from './pages/home/meet-our-team-section/meet-our-team-section.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TestemonialSectionComponent } from './pages/home/testemonial-section/testemonial-section.component';
import { OurBlogSectionComponent } from './pages/home/our-blog-section/our-blog-section.component';
import { FooterComponent } from './layout-components/footer/footer.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { PricePageComponent } from './pages/price-page/price-page.component';
import { WashingPointsComponent } from './pages/washing-points/washing-points.component';
import { TeamMembersPageComponent } from './pages/team-members-page/team-members-page.component';
import { ScheduleBookingPageComponent } from './pages/schedule-booking-page/schedule-booking-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BlogGridPageComponent } from './pages/blog-grid-page/blog-grid-page.component';

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
