import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBordIndexComponent } from './HomePage/Dashbord/dash-bord-index/dash-bord-index.component';
import { IndexHomeComponent } from './HomePage/index-home/index-home.component';

const routes: Routes = [
  { path : '', component : IndexHomeComponent},
  { path : 'Dashboard', component : DashBordIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
