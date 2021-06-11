import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { Accueil } from '../accueil';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { TokenService } from 'src/app/Services/token.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/Services/event.service';
import { Commentaire } from '../commentaire';
import { User } from 'src/app/users/user';
import { formatDistance } from 'date-fns';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  accueil= new Accueil();
  data: User;
  commentaires:Commentaire= new Commentaire();
  comentaires:any;
  accueils: any;
 // posts:Accueil[]=[];
  id: any;
  idpost:any;
  uploadForm: FormGroup;
  public role: string;
  public user: string;
  constructor(private eventService: EventService, private Jarwis: JarwisService, private token: TokenService, private formBuilder: FormBuilder) { }
  public takedToken = this.token.get();
  public fullpath: string = "http://localhost:8000/storage/"
  ngOnInit(): void {
    this.getpost()
    this.id = this.token.getId();
    this.user = this.token.getUser();
    this.role = this.token.getRole();
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
    this.getUserById();
  }
  getpost() {
    this.Jarwis.getpost().subscribe(res => {
      this.accueils = res;
      this.accueils.forEach(post => {
          post.displayTime = formatDistance(new Date(), new Date(post.created_at));
          post.commentaire.forEach(comm => {
          comm.displayTime = formatDistance(new Date(), new Date(comm.created_at));
        });
      });
    });
  }


  insertData() {
    this.Jarwis.addpost(this.id, this.accueil).subscribe(res => {
      this.getpost();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'votre post a été ajouter!'
      })
      window.location.reload();
    });
  }

  onFileSelectidoc(event) {
    const formData = new FormData();
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
      formData.append('file', this.uploadForm.get('profile').value);
      this.eventService.uploadevent(formData).subscribe(data => {
        this.accueil.filepath = data['name'];
        console.log(this.accueil.filepath);
      }, err => {
        console.log(err.error.text);
        this.accueil.filepath = err.error.text;
      })
    }

  }
  getcommentaire(){

    this.Jarwis.getcommentaire().subscribe(res => {
      this.comentaires = res;

      });

  }
  insertcomm(idpost){
    this.Jarwis.addcommentaire(this.id, idpost, this.commentaires).subscribe(res => {
     // this.getcommentaire();
      this.getpost();

    });
  }
  deleteData(idd) {
 Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.Jarwis.deletecomm(idd).subscribe(res => {
          this.getpost();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )

        });

      }


    })







  }
deletepost(idp){
  this.Jarwis.deletepost(idp).subscribe(res => {
    this.getpost();

  });
}
  getUserById() {
    this.Jarwis.getUserById(this.id).subscribe(data => {
      this.data = data;
      console.log(this.data);

    });
  }
}
