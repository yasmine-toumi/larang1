import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  users: any;
  public totalPages: number;
  pages: Array<number>;
  motCle: string = "";
  constructor(private Jarwis: JarwisService) { }

  ngOnInit(): void {
    this.getUserData();
  }
  getUserData() {
    this.Jarwis.searchuser(this.motCle, 1).subscribe(res => {
      this.users = res["data"];
      this.totalPages = res["last_page"];
      this.pages = new Array<number>(this.totalPages);
      //console.log(this.totalPages);
    });
  }
    chercher(data: any) {
      this.motCle = data.motCle;
      this.Jarwis.searchuser(data.motCle, 1).subscribe(res => {
        this.users = res["data"];
        this.totalPages = res["last_page"];
        this.pages = new Array<number>(this.totalPages);
        //console.log(this.users);
      });
    }
    onPageProduct(i: number){
      this.Jarwis.searchuser(this.motCle, i + 1).subscribe(res => {
        this.users = res["data"];
        this.totalPages = res["last_page"];
        this.pages = new Array<number>(this.totalPages);
        //console.log(this.users);
      });
    }

  }


