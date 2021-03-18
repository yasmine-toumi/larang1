import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { JarwisService } from 'src/app/Services/jarwis.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
id:any;
data:any;
user = new User();
  constructor(private activatedrouter: ActivatedRoute,private router: Router, private Jarwis: JarwisService) { }

  ngOnInit(): void {
    this.id = this.activatedrouter.snapshot.params.id;
    this.getData();
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