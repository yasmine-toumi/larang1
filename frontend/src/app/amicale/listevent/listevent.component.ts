import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JarwisService } from 'src/app/Services/jarwis.service';

@Component({
  selector: 'app-listevent',
  templateUrl: './listevent.component.html',
  styleUrls: ['./listevent.component.css']
})
export class ListeventComponent implements OnInit {
  usersoftheevent: any;
  paramurl: string;

  constructor(private Jarwis: JarwisService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.paramurl = params.get('id');
    });
    console.log(this.paramurl);
    this.getlistofUser(this.paramurl);
  }
  getlistofUser(idevent) {

    this.Jarwis.getuserByevent(idevent).subscribe(u => {
      this.usersoftheevent = u;
      console.log(this.usersoftheevent);

    }, err => {
      console.log(err);

    })

  }

}
