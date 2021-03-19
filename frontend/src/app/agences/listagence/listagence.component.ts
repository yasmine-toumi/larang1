import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-listagence',
  templateUrl: './listagence.component.html',
  styleUrls: ['./listagence.component.css']
})
export class ListagenceComponent implements OnInit {
agences:any;
  public role: string;
  constructor(private Jarwis: JarwisService, private token: TokenService) { }
  public takedToken = this.token.get();

  ngOnInit(): void {
    this.getagence();
    this.role = this.token.getRole();
  }
  getagence(){
   this.Jarwis.getagence().subscribe(res =>{
     this.agences=res;
   });
  }
}
