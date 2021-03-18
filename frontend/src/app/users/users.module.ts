import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { EdituserComponent } from './edituser/edituser.component';

const routes: Routes = [
  { path: 'user', component:UserComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'edituser/:id', component: EdituserComponent }
];

@NgModule({
  declarations: [UserComponent, AdduserComponent, EdituserComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
