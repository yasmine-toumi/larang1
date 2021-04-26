import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';
import 'sweetalert2/src/sweetalert2.scss';
import { Convention } from '../convention';
import { Router } from '@angular/router';

@Component({
  selector: 'app-convention',
  templateUrl: './convention.component.html',
  styleUrls: ['./convention.component.css']
})
export class ConventionComponent implements OnInit {
  catid = new FormControl('');
  cibid = new FormControl('');
  convention = new Convention();
  conventions: any;
  category:any;
  categorieid: string;
  cibleid: string;

 cible:any;
  constructor(private Jarwis: JarwisService, private token: TokenService , public router:Router) { }

  ngOnInit(): void {
    this.getconvention();
    this.getcategory();
    this.getcible();

  }
  getconvention() {
    this.Jarwis.getconvention().subscribe(res => {
      this.conventions = res;
    });
  }
  getcategory()
  {
    this.Jarwis.getcategory().subscribe(res => {
      this.category = res;
    });

  }
  getcible() {
    this.Jarwis.getcible().subscribe(res => {
      this.cible = res;
    });
  }

  getidcat(id) {
    console.log(id);
    this.categorieid = id;
  }
  getidcib(id) {
    console.log(id);
    this.cibleid = id;
  }
  insertData() {

    this.Jarwis.addconvention(this.categorieid, this.cibleid,this.convention).subscribe(res => {
      this.getconvention();
      alert("votre insertion a été effectué");

    window.location.reload();


    });
  }



detail(id: number){
  this.router.navigate(['amicale/listconventionbycat', id]);

}

}
