import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JarwisService } from 'src/app/Services/jarwis.service';
@Component({
  selector: 'app-boitesuggestion',
  templateUrl: './boitesuggestion.component.html',
  styleUrls: ['./boitesuggestion.component.css']
})
export class BoitesuggestionComponent implements OnInit {
  suggestion: any;
  user:any;
  iduser: string;
  constructor(private http: HttpClient, activatedRoute: ActivatedRoute, private Jarwis: JarwisService)  {}
  public fullpath: string = "http://localhost:8000/storage/"

  ngOnInit(): void {
    this.getsuggestion();
    this.getUser();
  }
  getUser() {
    this.Jarwis.getUser().subscribe(res => {
      this.user = res;
    });
  }
  getiduser(id) {
    console.log(id);
    this.iduser = id;
  }
  getsuggestion() {
      this.Jarwis.getsuggestion().subscribe(res => {
        this.suggestion = res;
      });
    }

}
