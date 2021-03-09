import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;
pages:Array<number>;

  constructor(private Jarwis: JarwisService) { }

  ngOnInit(): void {
    this.getUserData();
    this.pages=new Array();
  }


  getUserData(){
    this.Jarwis.getUserPaganable().subscribe(res =>{
this.users=res;
   });

  }
  deleteData(id){
    this.Jarwis.deleteData(id).subscribe(res=>{
      this.getUserData();
    });
  }

}
