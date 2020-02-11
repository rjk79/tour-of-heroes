import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component'

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }, //which view to display depending on URL
  { path: 'dashboard', component: DashboardComponent },
  {path: 'detail/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'} //navigates to dashboard immed
];

@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] //avail throughout app
})
export class AppRoutingModule { }
