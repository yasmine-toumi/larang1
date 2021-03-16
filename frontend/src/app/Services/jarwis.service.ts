import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

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
  getUser(){
  return this.http.get(`${this.baseUrl}/utilisateur`)
}
  insertData(data){
    return this.http.post(`${this.baseUrl}/adduser`,data)
  }


  getUserPaganable() {
    return this.http.get(`${this.baseUrl}/page/utilisateurs/5`)
  }

  deleteData(id){
    return this.http.delete(`${this.baseUrl}/deleteUser/`+id)
  }
  getUserById(id){
    return this.http.get(`${this.baseUrl}/utilisateur/`+id)
  }
  updatetData(id,data) {
    return this.http.put(`${this.baseUrl}/updateUser/`+id, data)
  }
  searchdata(motCle:string){
    return this.http.get(`${this.baseUrl}/search/`+"+motCle")
  }

  searchuser(motCle:string,page:number){
    return this.http.get(`${this.baseUrl}/searchuser?user=`+motCle+'&page='+page)
  }
}
