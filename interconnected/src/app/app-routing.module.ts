import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'projects', component: OurProjectsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
