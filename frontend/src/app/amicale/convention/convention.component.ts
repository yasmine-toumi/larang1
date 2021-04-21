import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-convention',
  templateUrl: './convention.component.html',
  styleUrls: ['./convention.component.css']
})
export class ConventionComponent implements OnInit {

  public role: string;
  files: any;
  document: any;
  uploadedFiles: any[] = [];
  constructor(private Jarwis: JarwisService, private token: TokenService) { }

  ngOnInit(): void {
    this.role = this.token.getRole();
    this.Jarwis.getconvention().subscribe(data => {
      console.log(data);
      this.files = data;

    });
  }
  getconvention() {
    this.Jarwis.getconvention().subscribe(res => {
      this.document = res;
    });
  }
  onUpload(event) {
    const formData = new FormData();
    formData.append('file', event.files[0]);
    formData.append('fileName', event.files[0].name);
    this.Jarwis.uploadConv(formData).subscribe(res => {
      console.log(res);
      Swal.fire(
        'Upload successful',
        'You clicked the button!',
        'success'
      )
    });
  }
  deleteData(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.Jarwis.deleteconvention(id).subscribe(res => {
          this.getconvention();
        });
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'

        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })


  }


}
