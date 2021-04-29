import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { Suggestion } from '../suggestion';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-reponsemessage',
  templateUrl: './reponsemessage.component.html',
  styleUrls: ['./reponsemessage.component.css']
})
export class ReponsemessageComponent implements OnInit {
  suggestion = new Suggestion();
  id: any;
  data: any;
  suggestions:any;
  constructor(private activatedrouter: ActivatedRoute, private Jarwis: JarwisService, private router: Router) { }
  public fullpath: string = "http://localhost:8000/storage/"
  ngOnInit(): void {
    this.id = this.activatedrouter.snapshot.params.id;

    this.getData();

  }
  getData() {
    this.Jarwis.getsuggestionById(this.id).subscribe(res => {
      // console.log(res);
      this.data = res;
      console.log(this.id);
      this.suggestion = this.data;
    })


}
  updasuggestion(){
    this.Jarwis.updasuggestion(this.id, this.suggestion ).subscribe(res => {

      Swal.fire(
        'Good job!',
        'Mise a jour efecuter avec succe',
        'success'
      )
    })




  }

}
