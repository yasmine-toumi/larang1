import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Agence } from '../agence';

@Component({
  selector: 'app-conditionsbank',
  templateUrl: './conditionsbank.component.html',
  styleUrls: ['./conditionsbank.component.css']
})
export class ConditionsbankComponent implements OnInit {
  public role: string;
  files: any;
  uploadedFiles: any[] = [];
  constructor(private Jarwis: JarwisService, private token: TokenService) { }

  ngOnInit(): void {
    this.role = this.token.getRole();
    this.Jarwis.getfiles().subscribe(data => {
      console.log(data);
      this.files = data;

    });

  }

  getfiles(){
    this.Jarwis.getfiles().subscribe(data => {
      console.log(data);
      this.files = data;

    });
  }
  onUpload(event) {
    const formData = new FormData();
    formData.append('file', event.files[0]);
    formData.append('fileName', event.files[0].name);
    this.Jarwis.upload(formData).subscribe(res => {
      console.log(res);
      alert('Uploaded Successfully.');
      this.getfiles();
    });
  }

}
