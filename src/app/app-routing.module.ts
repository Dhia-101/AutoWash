import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {TeamMembersPageComponent} from './pages/team-members-page/team-members-page.component';
import {ScheduleBookingPageComponent} from './pages/schedule-booking-page/schedule-booking-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {DetailPageComponent} from './pages/detail-page/detail-page.component';
import {WashingPointsComponent} from './pages/washing-points/washing-points.component';
import {ServicePageComponent} from './pages/service-page/service-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {BlogGridPageComponent} from './pages/blog-grid-page/blog-grid-page.component';
import {PricePageComponent} from './pages/price-page/price-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'service', component: ServicePageComponent },
  { path: 'price', component: PricePageComponent },
  { path: 'washing-points', component: WashingPointsComponent },
  { path: 'more/blog-grid', component: BlogGridPageComponent },
  { path: 'more/detail', component: DetailPageComponent },
  { path: 'more/team-members', component: TeamMembersPageComponent },
  { path: 'more/schedule-booking', component: ScheduleBookingPageComponent },
  { path: 'contact', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
