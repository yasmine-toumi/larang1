import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { JarwisService } from 'src/app/Services/jarwis.service';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css'],

})
export class ResponseResetComponent implements OnInit {
  public error: any = [];
  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null
  }
  constructor(private route: ActivatedRoute,
    private Jarwis: JarwisService,
    private router: Router,
    private Notify: SnotifyService,
) {
      route.queryParams.subscribe(params => {
        this.form.resetToken = params['token']
      });}



  onSubmit() {
    this.Jarwis.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Votre mot de passe à été changé avec succès'
    })


  }
  handleResponse(data) {



    let _router = this.router;
    this.Notify.confirm('Done!, Now login with new Password', {
      buttons: [
        {
          text: 'Okay',
          action: toster => {
            _router.navigateByUrl('/login'),
              this.Notify.remove(toster.id)
          }
        },
      ]
    })

  }

  handleError(error) {
    this.error = error.error.errors;
  }
  ngOnInit() {
  }

}
