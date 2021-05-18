import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Agence } from '../agence';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';



@Component({
  selector: 'app-listagence',
  templateUrl: './listagence.component.html',
  styleUrls: ['./listagence.component.css']
})
export class ListagenceComponent implements OnInit {
  agences: any;
  agence = new Agence();
  public role: string;
  constructor(private Jarwis: JarwisService, private token: TokenService) { }
  public takedToken = this.token.get();

  ngOnInit(): void {
    this.getagence();
    this.role = this.token.getRole();
  }
  getagence() {
    this.Jarwis.getagence().subscribe(res => {
      this.agences = res;
    });
  }
  insertData() {
    this.Jarwis.addagences(this.agence).subscribe(res => {
      this.getagence();
      Swal.fire(
        'Good job!',
        'votre insertion a été effectué',
        'success'
      )

      window.location.reload();
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
        this.Jarwis.deleteagences(id).subscribe(res => {
          this.getagence();
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
