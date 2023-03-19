import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexHomeComponent } from './HomePage/landingPage/index-home/index-home.component';
import { HeaderComponent } from './HomePage/landingPage/header/header.component';
import { FooterComponent } from './HomePage/landingPage/footer/footer.component';
import { BannerComponent } from './HomePage/landingPage/banner/banner.component';
import { ContentComponent } from './HomePage/landingPage/content/content.component';
import { FeaturesJobsComponent } from './HomePage/landingPage/features-jobs/features-jobs.component';
import { FeaturesCityComponent } from './HomePage/landingPage/features-city/features-city.component';
import { HighestFreelancerComponent } from './HomePage/landingPage/highest-freelancer/highest-freelancer.component';
import { MembershipPlansComponent } from './HomePage/landingPage/membership-plans/membership-plans.component';
import { DashbordIndexComponent } from './HomePage/Dashbord/dashbord-index/dashbord-index.component';
import { ResumeComponent } from './HomePage/Dashbord/ResumeData/resume/resume.component';
import { DashbordHeaderComponent } from './HomePage/Dashbord/dashbord-header/dashbord-header.component';
import { DashbordSideBarComponent } from './HomePage/Dashbord/dashbord-side-bar/dashbord-side-bar.component';
import { LoginComponent } from './HomePage/landingPage/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './HomePage/Dashbord/settings/settings.component';
import { ProfessionalDataComponent } from './HomePage/Dashbord/ResumeData/professional-data/professional-data.component';
import { TrainingsQualificationsComponent } from './HomePage/Dashbord/ResumeData/trainings-qualifications/trainings-qualifications.component';
import { LanguageComponent } from './HomePage/Dashbord/ResumeData/language/language.component';
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
    DashbordIndexComponent,
    ResumeComponent,
    DashbordHeaderComponent,
    DashbordSideBarComponent,
    LoginComponent,
    SettingsComponent,
    ProfessionalDataComponent,
    TrainingsQualificationsComponent,
    LanguageComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
