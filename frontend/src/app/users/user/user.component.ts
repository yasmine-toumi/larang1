import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';

import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;
  pages: Array<number>;
  motCle: string = "";
  public role:string;
  public totalPages: number;
  constructor(private Jarwis: JarwisService, private token: TokenService) { }

  public takedToken = this.token.get();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.takedToken
    })
  };

  ngOnInit(): void {
    this.getUserData();
    this.role=this.token.getRole();

  }


  getdetails() {
    console.log(this.token.getRole());
  }
  getUserData() {
    this.Jarwis.searchuser(this.motCle, 1).subscribe(res => {
      this.users = res["data"];
      this.totalPages = res["last_page"];
      this.pages = new Array<number>(this.totalPages);
      //console.log(this.totalPages);
    });

  }
  deleteData(id) {
    this.Jarwis.deleteData(id, this.httpOptions).subscribe(res => {
      this.getUserData();
    });
  }
  chercher(data:any) {
    this.motCle=data.motCle;
    this.Jarwis.searchuser(data.motCle, 1).subscribe(res => {
      this.users = res["data"];
      this.totalPages = res["last_page"];
      this.pages = new Array<number>(this.totalPages);
      //console.log(this.users);
    });
  }
  onPageProduct(i:number){
    this.Jarwis.searchuser(this.motCle, i+1).subscribe(res => {
      this.users = res["data"];
      this.totalPages = res["last_page"];
      this.pages = new Array<number>(this.totalPages);
      //console.log(this.users);
    });
  }

}
