import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListagenceComponent } from './listagence/listagence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditagencesComponent } from './editagences/editagences.component';
import { ConditionsbankComponent } from './conditionsbank/conditionsbank.component';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { DocummentComponent } from './documment/documment.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ListeconventionsComponent } from './listeconventions/listeconventions.component';
import { EditchallengesComponent } from './editchallenges/editchallenges.component';


const routes: Routes = [
  {path:'listagence', component:ListagenceComponent },
  {path:'edit/:id',component:EditagencesComponent},
  {path:'condition',component:ConditionsbankComponent},
  {path:'document',component:DocummentComponent},
  {path:'challenge',component:ChallengesComponent},
  {path:'listeconventions',component:ListeconventionsComponent},
  {path:'editchaleng/:id',component:EditchallengesComponent}
];
@NgModule({
  declarations: [ListagenceComponent, EditagencesComponent, ConditionsbankComponent, DocummentComponent, ChallengesComponent, ListeconventionsComponent, EditchallengesComponent],
  imports: [FormsModule, ReactiveFormsModule,
    CommonModule, RouterModule.forChild(routes), ButtonModule, FileUploadModule
  ]
})
export class AgencesModule { }
