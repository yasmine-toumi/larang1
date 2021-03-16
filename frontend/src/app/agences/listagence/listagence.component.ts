import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';

@Component({
  selector: 'app-listagence',
  templateUrl: './listagence.component.html',
  styleUrls: ['./listagence.component.css']
})
export class ListagenceComponent implements OnInit {
agences:any;
  constructor(private Jarwis: JarwisService) { }

  ngOnInit(): void {
  }

}
