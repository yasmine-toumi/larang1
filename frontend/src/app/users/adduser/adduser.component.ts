import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { User } from '../user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  users: any;
user = new User();
mode:number=1;

  constructor(private router: Router,private Jarwis: JarwisService) { }

  ngOnInit(): void {
  }
  insertData(){
    this.Jarwis.insertData(this.user).subscribe(res => {
      this.users =res;
      this.mode=2;
      alert("Mise a jour efecuter avec succe");
    });
  }
  OnListUsers(){
    this.router.navigateByUrl("/users/user");

  }
}
