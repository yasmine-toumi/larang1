import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Challenge } from '../challenge';

@Component({
  selector: 'app-challenges date-range-picker-comparison-example',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css'],

})
export class ChallengesComponent implements OnInit {
challenges:any;
challenge =new Challenge;
data:any;
id:any;

  constructor(private Jarwis: JarwisService, private token: TokenService) {

  }
  ngOnInit(): void {
    this.getchallenge();
  }
  getchallenge() {
    this.Jarwis.getchallenge().subscribe(res => {
      this.challenges = res;
    });
  }
  insertData(){
    this.Jarwis.addChallenges(this.challenge).subscribe(res => {
      this.getchallenge();
    });
  }
affecter(id){

     this.Jarwis.addChallengesAgences(id).subscribe(res => {
      this.data = res;
       this.challenge = this.data;
     });
  this.ngOnInit();
}
}
