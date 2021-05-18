import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login: 'http://localhost:8000/api/login',
    signup: 'http://localhost:8000/api/signup'
  };
  constructor() { }
  handle(token,role,user,id) {
    this.set(token,role,user,id);


  }
  set(token,role,user,id) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('user', user);
    localStorage.setItem('id',id);

  }
  get() {
    return localStorage.getItem('token');
  }
  getRole() {
    return localStorage.getItem('role');
  }
  getUser() {
    return localStorage.getItem('user');
  }
  getId() {
    return localStorage.getItem('id');
  }
  remove() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    localStorage.removeItem('id');
  }
  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }
  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }
  loggedIn() {
    return this.isValid();
  }
}
