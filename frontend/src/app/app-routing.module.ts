import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgencesModule } from './agences/agences.module';
import { AmicaleModule } from './amicale/amicale.module';
import { LoginComponent } from './components/login/login.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { RhModule } from './rh/rh.module';
import { AfterLoginService } from './Services/after-login.service';
import { BeforeLoginService } from './Services/before-login.service';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UsersModule } from './users/users.module';


const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'profil',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'password-request-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'password-responsr-reset',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'users', loadChildren: () => import('./users/users.module').then(m => UsersModule),
    canActivate: [AfterLoginService]},
  {
    path: 'agence', loadChildren: () => import('./agences/agences.module').then(m => AgencesModule),
    canActivate: [AfterLoginService]},
  {
    path: 'amicale', loadChildren: () => import('./amicale/amicale.module').then(m => AmicaleModule),
    canActivate: [AfterLoginService]},
  {
    path: 'rh', loadChildren: () => import('./rh/rh.module').then(m => RhModule),
    canActivate: [AfterLoginService]
  },
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => DashboardModule),
    canActivate: [AfterLoginService]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
