import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
id:any;
data:any;
user = new User();
roles=[
  {id:1,name:'administrateur'},
  { id: 2,name: 'utilisateur' },
  { id: 3, name: 'chef communication' },
  { id: 4, name: 'communication' },
  { id: 4, name: 'chef rh' },
  { id: 5, name: 'rh' },
  { id: 6, name: 'chef amicale' },
  { id: 7, name: 'amicale' },
  { id: 8, name: 'chef d agence' },
  { id: 9, name: 'agence' }
];
  public role: string;
  constructor(private activatedrouter: ActivatedRoute, private router: Router, private Jarwis: JarwisService, private token: TokenService) { }
  public takedToken = this.token.get();
  ngOnInit(): void {
    this.id = this.activatedrouter.snapshot.params.id;
    this.getData();
    this.role = this.token.getRole();
  }
getData(){
  this.Jarwis.getUserById(this.id).subscribe(res =>{
    this.data = res;
    this.user= this.data;
  })
}
  updateUser(){
    this.Jarwis.updatetData(this.id,this.user).subscribe(res =>{
      alert("Mise a jour efecuter avec succe");
    });
  }
  OnListUsers() {
    this.router.navigateByUrl("/users/user");

  }
}
