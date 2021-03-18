import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { TokenService } from './Services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  public role: string;
  public loggedIn: boolean;
  constructor(private Auth: AuthService,
    private Token: TokenService
  ) { }
  ngOnInit(): void{
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    this.role = this.Token.getRole();
  }
}
