import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListagenceComponent } from './listagence/listagence.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'listagence', component:ListagenceComponent }
];
@NgModule({
  declarations: [ListagenceComponent],
  imports: [FormsModule,
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AgencesModule { }