import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { Agence } from '../agence';
import { Chalagence } from '../Chalagence';
type RangType = {
  rang: any;
};
@Component({
  selector: 'app-editchallenges',
  templateUrl: './editchallenges.component.html',
  styleUrls: ['./editchallenges.component.css']
})
export class EditchallengesComponent implements OnInit {
  id: any;
  data: any;
  selectedRang = new Chalagence();
  public agences: any;
  public agenceSelected = new Agence();
  agencess = new Agence();

  rang: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  idchallange: any;
  agenceRang = new FormControl('');
  agenceid = new FormControl('');
  constructor(private Jarwis: JarwisService, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.idchallange = this.activatedrouter.snapshot.params.id;
    this.Jarwis.getagence2().subscribe(data => {
      this.agencess = data;
      console.log(this.agencess);
    }, err => {
      console.log(err);
    })
  }



  onSubmit() {
    console.warn(this.agenceRang.value);
    console.warn(this.agenceid.value);
    this.selectedRang.rang = this.agenceRang.value;
    this.Jarwis.updateRanKForOneAgence(this.selectedRang, this.agenceid.value, this.idchallange).subscribe(data=>{
      console.log(data);
      alert("Mise a jour efecuter avec succe");
    },err=>{
      console.log(err);
    })
  }

}
