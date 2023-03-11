import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexHomeComponent } from './HomePage/index-home/index-home.component';
import { HeaderComponent } from './HomePage/header/header.component';
import { FooterComponent } from './HomePage/footer/footer.component';
import { BannerComponent } from './HomePage/banner/banner.component';
import { ContentComponent } from './HomePage/content/content.component';
import { FeaturesJobsComponent } from './HomePage/features-jobs/features-jobs.component';
import { FeaturesCityComponent } from './HomePage/features-city/features-city.component';
import { HighestFreelancerComponent } from './HomePage/highest-freelancer/highest-freelancer.component';
import { MembershipPlansComponent } from './HomePage/membership-plans/membership-plans.component';
import { DashBordHeaderComponent } from './HomePage/Dashbord/dash-bord-header/dash-bord-header.component';
import { DashBordContainerComponent } from './HomePage/Dashbord/dash-bord-container/dash-bord-container.component';
import { DashBordApplayForJobPopupComponent } from './HomePage/Dashbord/dash-bord-applay-for-job-popup/dash-bord-applay-for-job-popup.component';
import { DashBordIndexComponent } from './HomePage/Dashbord/dash-bord-index/dash-bord-index.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexHomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ContentComponent,
    FeaturesJobsComponent,
    FeaturesCityComponent,
    HighestFreelancerComponent,
    MembershipPlansComponent,
    DashBordHeaderComponent,
    DashBordContainerComponent,
    DashBordApplayForJobPopupComponent,
    DashBordIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
