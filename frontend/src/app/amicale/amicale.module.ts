import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { EvenementComponent } from './evenement/evenement.component';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MbscModule } from '@mobiscroll/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';

import "./../../../node_modules/flatpickr/dist/flatpickr.min.css";
import { ConventionComponent } from './convention/convention.component';
import { ListeventComponent } from './listevent/listevent.component';
import { ListconvbycateComponent } from './listconvbycate/listconvbycate.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { BoitesuggestionComponent } from './boitesuggestion/boitesuggestion.component';
import { ReponsemessageComponent } from './reponsemessage/reponsemessage.component';
import { SondageComponent } from './sondage/sondage.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  { path: 'evenement', component: EvenementComponent },
  {path:'convention',component:ConventionComponent},
  {path:'listdetail/:id',component:ListeventComponent},
  {path:'listconventionbycat/:id',component:ListconvbycateComponent},
  {path:'suggestion',component:SuggestionComponent},
  { path: 'boitedesuggestion', component:BoitesuggestionComponent},
  { path: 'reponse/:id', component:ReponsemessageComponent },
  { path: 'sondage', component:SondageComponent },
];



@NgModule({
  declarations: [EvenementComponent, ConventionComponent, ListeventComponent, ListconvbycateComponent, SuggestionComponent, BoitesuggestionComponent, ReponsemessageComponent, SondageComponent],
  imports: [FormsModule, ReactiveFormsModule,
    CommonModule, RouterModule.forChild(routes), ButtonModule, MbscModule, FileUploadModule,
    NgbModalModule, HttpClientModule,
    CalendarModule, MatFormFieldModule,
    MatInputModule, MatSelectModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),


  ],

})
export class AmicaleModule { }
