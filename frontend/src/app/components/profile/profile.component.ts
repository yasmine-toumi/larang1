import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Services/token.service';
import { User } from 'src/app/users/user';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { EventService } from 'src/app/Services/event.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usr = new User();
  currentUser: any;
  data:User;
  id:any;
  uploadForm: FormGroup;
  constructor(private eventService: EventService, private token: TokenService, public JarwisService: JarwisService, private formBuilder: FormBuilder) { }
  public takedToken = this.token.get();
  public fullpath: string = "http://localhost:8000/storage/"
  ngOnInit(): void {
    this.currentUser = this.token.getId();
    console.log(this.token.getId());
    this.getUserById();
  }
  getUserById(){
    this.JarwisService.getUserById(this.currentUser).subscribe(data => {
      this.data=data;
      console.log(this.data);

    });
  }

  onFileSelectidoc(event) {
    const formData = new FormData();
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      //this.uploadForm.get('profile').setValue(file);
      formData.append('file',file);
      this.eventService.uploadevent(formData).subscribe(data => {
        this.usr.image = data['name'];
        console.log(this.usr.image);
      }, err => {
        console.log(err.error.text);
        this.usr.image = err.error.text;
      })
    }

  }
  insertData(){
    this.JarwisService.updatetData(this.currentUser, this.usr).subscribe(res => {
      alert("Mise a jour efecuter avec succe");
      this.getUserById();
    });
  }

}
