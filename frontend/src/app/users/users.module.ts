import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'user', component: UserComponent },
    { path: 'adduser', component: AdduserComponent }
];

@NgModule({
  declarations: [UserComponent, AdduserComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
