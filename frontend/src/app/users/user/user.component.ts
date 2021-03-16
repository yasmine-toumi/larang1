import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;
  pages: Array<number>;
  motCle: string = "";
  public totalPages: number;
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
  deleteData(id) {
    this.Jarwis.deleteData(id).subscribe(res => {
      this.getUserData();
    });
  }
  dochercher() {
    this.Jarwis.searchdata(this.motCle).subscribe(data => {
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
