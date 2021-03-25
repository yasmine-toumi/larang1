import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListagenceComponent } from './listagence/listagence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditagencesComponent } from './editagences/editagences.component';
import { ConditionsbankComponent } from './conditionsbank/conditionsbank.component';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';


const routes: Routes = [
  {path:'listagence', component:ListagenceComponent },
  {path:'edit/:id',component:EditagencesComponent},
  {path:'condition',component:ConditionsbankComponent}
];
@NgModule({
  declarations: [ListagenceComponent, EditagencesComponent, ConditionsbankComponent],
  imports: [FormsModule, ReactiveFormsModule,
    CommonModule, RouterModule.forChild(routes), ButtonModule, FileUploadModule
  ]
})
export class AgencesModule { }
