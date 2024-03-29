import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null,
    birthday:null,
    tel:null,
    role:"utilisateur"
  };
  public error:any = [];
  constructor(private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router

  )  { }
  onSubmit() {
    this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.Token.handle(data.access_token, data.role, data.user,data.id);
    this.router.navigateByUrl('/profil');
  }
  handleError(error) {
    this.error = error.error.errors;
  }
  ngOnInit(): void {
  }

}
