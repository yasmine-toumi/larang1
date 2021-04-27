import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/Services/event.service';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Suggestion } from '../suggestion';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {
  userid: string;
  user: any;
  uploadForm: FormGroup;
  suggestion = new Suggestion();
  suggestions: any;
  iduser: string;
  constructor(private eventService: EventService, private formBuilder: FormBuilder, private Jarwis: JarwisService, private token: TokenService, public router: Router) { }

  ngOnInit(): void {
    this.getsuggestion();
   this.getUser();
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }
  getsuggestion() {
    this.Jarwis.getsuggestion().subscribe(res => {
      this.suggestions = res;
    });
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
  insertData() {
    console.log(this.suggestion);

    this.Jarwis.addsuggestion(this.iduser, this.suggestion).subscribe(res => {
      this.getsuggestion();
      Swal.fire(
        'Good job!',
        'votre insertion a été effectué',
        'success'
      )

    });
  }



  onFileSelectidoc(event) {
    const formData = new FormData();
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
      formData.append('file', this.uploadForm.get('profile').value);
      this.eventService.uploadevent(formData).subscribe(data => {
        this.suggestion.document = data["name"];
        console.log(this.suggestion.document);
      }, err => {
        console.log(err.error.text);
        this.suggestion.document = err.error.text;
      })
    }

  }
}
