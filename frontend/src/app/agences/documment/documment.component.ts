import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-documment',
  templateUrl: './documment.component.html',
  styleUrls: ['./documment.component.css']
})
export class DocummentComponent implements OnInit {
  public role: string;
  files: any;
  document:any;
  uploadedFiles: any[] = [];
  constructor(private Jarwis: JarwisService, private token: TokenService) { }

  ngOnInit(): void {
    this.role = this.token.getRole();
    this.Jarwis.getfilesd().subscribe(data => {
      console.log(data);
      this.files = data;

    });
  }
  getfiles() {
    this.Jarwis.getfilesd().subscribe(res => {
      this.document = res;
    });
  }
  onUpload(event) {
    const formData = new FormData();
    formData.append('file', event.files[0]);
    formData.append('fileName', event.files[0].name);
    this.Jarwis.uploadd(formData).subscribe(res => {
      console.log(res);
      alert('Uploaded Successfully.');
    });
  }
  deleteData(id) {
    let conf = confirm("Êtes-vous sûr de vouloir supprimer ?");
    if (conf) {
      this.Jarwis.deletedoc(id).subscribe(res => {
        this.getfiles();
      });
    }
  }


}
