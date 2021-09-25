import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import {PricePageComponent} from './price-page/price-page.component';
import {WashingPointsComponent} from './washing-points/washing-points.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {BlogGridPageComponent} from './blog-grid-page/blog-grid-page.component';
import {DetailPageComponent} from './detail-page/detail-page.component';
import {TeamMembersPageComponent} from './team-members-page/team-members-page.component';
import {ScheduleBookingPageComponent} from './schedule-booking-page/schedule-booking-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'service', component: ServicePageComponent },
  { path: 'price', component: PricePageComponent },
  { path: 'washing-points', component: WashingPointsComponent },
  { path: 'blog-grid', component: BlogGridPageComponent },
  { path: 'detail-page', component: DetailPageComponent },
  { path: 'team-members', component: TeamMembersPageComponent },
  { path: 'schedule-booking', component: ScheduleBookingPageComponent },
  { path: 'contact', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
