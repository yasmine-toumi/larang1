import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [

  { path: 'accueil', component: AccueilComponent },
];
@NgModule({
  declarations: [AccueilComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
