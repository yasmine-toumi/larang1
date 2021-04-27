import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import 'sweetalert2/src/sweetalert2.scss';
import { Convention } from '../convention';
import { Router } from '@angular/router';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-convention',
  templateUrl: './convention.component.html',
  styleUrls: ['./convention.component.css']
})
export class ConventionComponent implements OnInit {
  catid = new FormControl('');
  cibid = new FormControl('');
  convention = new Convention();
  conventions: any;
  category:any;
  categorieid: string;
  cibleid: string;
  uploadForm: FormGroup;
 cible:any;
  constructor(private eventService:EventService,private formBuilder: FormBuilder,private Jarwis: JarwisService, private token: TokenService , public router:Router) { }

  ngOnInit(): void {
    this.getconvention();
    this.getcategory();
    this.getcible();
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }
  getconvention() {
    this.Jarwis.getconvention().subscribe(res => {
      this.conventions = res;
    });
  }
  getcategory()
  {
    this.Jarwis.getcategory().subscribe(res => {
      this.category = res;
    });

  }
  getcible() {
    this.Jarwis.getcible().subscribe(res => {
      this.cible = res;
    });
  }

  getidcat(id) {
    console.log(id);
    this.categorieid = id;
  }
  getidcib(id) {
    console.log(id);
    this.cibleid = id;
  }
  insertData() {
    console.log(this.convention);

    this.Jarwis.addconvention(this.categorieid, this.cibleid,this.convention).subscribe(res => {
      this.getconvention();
    Swal.fire(
        'Good job!',
        'votre insertion a été effectué',
        'success'
      )

   //window.location.reload();


    });
  }



detail(id: number){
  this.router.navigate(['amicale/listconventionbycat', id]);

}
  onFileSelectimage(event){
    const formData = new FormData();
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
      formData.append('file', this.uploadForm.get('profile').value);
      this.eventService.uploadevent(formData).subscribe(data=>{

        this.convention.image = data["name"];
        console.log(this.convention.image);

      },err=>{
        console.log(err.error.text);
        this.convention.image = err.error.text;
      })
    }

  }
  onFileSelectidoc(event) {
    const formData = new FormData();
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
      formData.append('file', this.uploadForm.get('profile').value);
      this.eventService.uploadevent(formData).subscribe(data => {
        this.convention.document = data["name"];
        this.convention.name_path = data["name"];
        console.log(this.convention.name_path);
        console.log(this.convention.document);
      }, err => {
        console.log(err.error.text);
        this.convention.document = err.error.text;
      })
    }

  }
}
