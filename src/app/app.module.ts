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
    MembershipPlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
