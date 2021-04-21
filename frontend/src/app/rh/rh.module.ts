import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './document/document.component';
import { ListuserComponent } from './listuser/listuser.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

  { path: 'document', component: DocumentComponent },
  { path: 'listuser', component: ListuserComponent },
];


@NgModule({
  declarations: [DocumentComponent, ListuserComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule
  ]
})
export class RhModule { }
