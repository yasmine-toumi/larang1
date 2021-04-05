import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { EvenementComponent } from './evenement/evenement.component';
const routes: Routes = [
  { path: 'evenement', component: EvenementComponent },

];



@NgModule({
  declarations: [EvenementComponent],
  imports: [FormsModule, ReactiveFormsModule,
    CommonModule, RouterModule.forChild(routes), ButtonModule, FileUploadModule

  ]
})
export class AmicaleModule { }
