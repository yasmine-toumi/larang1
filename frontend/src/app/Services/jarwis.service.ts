import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agence } from '../agences/agence';
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

 getagence(){
   return this.http.get(`${this.baseUrl}/agence`)
 }
  getagence2():Observable<Agence> {
    return this.http.get<Agence>(`${this.baseUrl}/agence`)
  }
  addagences(data){
    return this.http.post(`${this.baseUrl}/addagences`,data)

 }
  deleteagences(id){
    return this.http.delete(`${this.baseUrl}/deleteagences/` + id)
  }

updatetagence(id, data) {
  return this.http.put(`${this.baseUrl}/updagences/` + id, data)
}
  getagenceById(id){
    return this.http.get(`${this.baseUrl}/agence/` + id)
  }

  addfiles(data) {
    return this.http.post(`${this.baseUrl}/addfiles`, data)

  }
  getfiles() {
    return this.http.get(`${this.baseUrl}/filesf`)
  }
  upload(formData){
    return this.http.post(`${this.baseUrl}/uploadf`, formData)
}


deletedoc(id){
  return this.http.delete(`${this.baseUrl}/deletedoc/` + id)
}
  getfilesd() {
    return this.http.get(`${this.baseUrl}/filesd`)
  }
  uploadd(formData) {
    return this.http.post(`${this.baseUrl}/uploadd`, formData)
  }


  getchallenge(){
    return this.http.get(`${this.baseUrl}/getchallenge`)
  }
  addChallenges(data) {
    return this.http.post(`${this.baseUrl}/addChallenges`, data)
}

addChallengesAgences(id) {

  return this.http.post(`${this.baseUrl}/addChallengesAgences/` + id,null);
 }

 updateRanKForOneAgence(rang,idagence,idchallange){
   return this.http.put(`${this.baseUrl}/updatechallangeagence/` + idagence +"/"+idchallange,rang);
 }


//  addChallengesaffected(affected){
//     return this.http.post(`${this.baseUrl}/addChallenges`, affected)
//   }
//   getchallengeaffected(affected) {
//     return this.http.get(`${this.baseUrl}/getchallenge`, affected)
//   }
}
