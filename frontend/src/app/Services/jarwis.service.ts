import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient,private token: TokenService) { }




  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }
  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }
  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data)
  }

  changePassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }

  insertData(data){
    return this.http.post(`${this.baseUrl}/adduser`,data)
  }




  deleteData(id,token){
    return this.http.delete(`${this.baseUrl}/deleteUser/` + id, token)
  }
  getUserById(id){
    return this.http.get(`${this.baseUrl}/utilisateur/`+id)
  }
  updatetData(id,data) {
    return this.http.put(`${this.baseUrl}/updateUser/`+id, data)
  }


  searchuser(motCle:string,page:number){
    return this.http.get(`${this.baseUrl}/searchuser?user=`+motCle+'&page='+page)
  }
}
