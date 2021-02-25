import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';
import { JarwisService } from '../../Services/jarwis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public form = {
    email: null,
    password: null
  }
  public error = null;
  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
    ) { }
  onSubmit() {
    this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profil');

  }
  handleError(error) {
    this.error = error.error.error;
  }
  ngOnInit(): void {
  }

}
