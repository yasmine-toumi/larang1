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
  fileForm: FormGroup;
  myFiles: string[] = [];
  uploadedFiles: any[] = [];


  constructor(private Jarwis: JarwisService, private token: TokenService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.role = this.token.getRole();
    this.fileForm = this.fb.group({
      name: [''],
      file: ['']
    });

  }
  getfiles() {
    this.Jarwis.getfiles().subscribe(res => {
      this.files = res;
    });
  }
  Upload(event) {
    //   if(event.target.files.length>0){
    // const file = event.target.file[0];
    //  this.fileForm.get('file').setValue(file);

    //   }
    for (var i = 0; i < event.target.files.length; i++) {

      this.myFiles.push(event.target.files[i]);

    }

  }
  insertData() {
    const formData = new FormData();

    for (var i = 0; i < this.files.length; i++) {
      formData.append("file[]", this.files[i]);

    }
    this.Jarwis.upload(formData).subscribe(res => {
      console.log(res);
      alert('Uploaded Successfully.');
    });

    // formData.append('name',this.fileForm.get('name').value);
    // formData.append('file', this.fileForm.get('file').value);
  }

  onUpload(event){
    const formData = new FormData();
    formData.append('file', event.files[0]);
    formData.append('fileName', event.files[0].name);
    this.Jarwis.upload(formData).subscribe(res => {
      console.log(res);
      alert('Uploaded Successfully.');
    });
  }

}
