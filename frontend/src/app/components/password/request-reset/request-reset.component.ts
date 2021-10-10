import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';

import {JarwisService } from 'src/app/Services/jarwis.service';
//import { SnotifyService } from 'ng-snotify';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  public form = {
    email: null
  };
  constructor(
    private Jarvis: JarwisService,
    private notify: SnotifyService,
    private Notfiy: SnotifyService
  ) { }
  ngOnInit(): void {
  }

  onSubmit() {
    this.Notfiy.info('Wait...', { timeout: 5000 })
    let timerInterval
    Swal.fire({
      title: 'Alerte de fermeture automatique!',
      html: 'Un E-mail va étre envoyée en <b>5000</b> milliseconds.',
      timer: 5000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getHtmlContainer()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
            }
          }
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
    this.Jarvis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)

      );
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }

  handleResponse(res) {
    this.Notfiy.success(res.data, { timeout: 0 });
    this.form.email = null;
  }

}
