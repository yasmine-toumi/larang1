import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { Agence } from '../agence';

@Component({
  selector: 'app-editagences',
  templateUrl: './editagences.component.html',
  styleUrls: ['./editagences.component.css']
})
export class EditagencesComponent implements OnInit {
agence=new Agence();
  id: any;
  data: any;
  constructor(private activatedrouter: ActivatedRoute, private Jarwis: JarwisService ,private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedrouter.snapshot.params.id;
    this.getData();
  }
  getData() {
    this.Jarwis.getagenceById(this.id).subscribe(res => {
    // console.log(res);
       this.data = res;
       this.agence = this.data;
    })
  }
 updateAgence() {
   this.Jarwis.updatetagence(this.id, this.agence).subscribe(res=>{
      alert("Mise a jour efecuter avec succe");
    })


  }

}
