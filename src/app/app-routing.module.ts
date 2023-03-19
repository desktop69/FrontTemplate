import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordIndexComponent } from './HomePage/Dashbord/dashbord-index/dashbord-index.component';
import { ResumeComponent } from './HomePage/Dashbord/ResumeData/resume/resume.component';
import { SettingsComponent } from './HomePage/Dashbord/settings/settings.component';
import { IndexHomeComponent } from './HomePage/landingPage/index-home/index-home.component';
import { LoginComponent } from './HomePage/landingPage/login/login.component';

const routes: Routes = [
  {
    path: 'login', component:  LoginComponent,
    children: [{ path: 'login', component: IndexHomeComponent },]
  },

  {
    path: '', component: DashbordIndexComponent,
    children: [
      { path: 'Resume', component: ResumeComponent },
      { path: 'Settings', component: SettingsComponent}
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
