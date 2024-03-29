import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';
import { Agence } from '../agences/agence';
import { Eventss } from '../amicale/eventss';
import { User } from '../users/user';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private token: TokenService) { }


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

  // service user
  insertData(data) {
    return this.http.post(`${this.baseUrl}/adduser`, data)
  }
  deleteData(id, token) {
    return this.http.delete(`${this.baseUrl}/deleteUser/` + id, token)
  }
  getUserById(id) {
    return this.http.get<User>(`${this.baseUrl}/utilisateur/` + id)
  }
  updatetData(id, data) {
    return this.http.put(`${this.baseUrl}/updateUser/` + id, data)
  }
  searchuser(motCle: string, page: number) {
    return this.http.get(`${this.baseUrl}/searchuser?user=` + motCle + '&page=' + page)
  }

  getUser() {
    return this.http.get(`${this.baseUrl}/getUser`)
  }

 // service  agence
  getagence() {
    return this.http.get(`${this.baseUrl}/agence`)
  }
  getagence2(): Observable<Agence> {
    return this.http.get<Agence>(`${this.baseUrl}/agence`)
  }
  addagences(data) {
    return this.http.post(`${this.baseUrl}/addagences`, data)
  }
  deleteagences(id) {
    return this.http.delete(`${this.baseUrl}/deleteagences/` + id)
  }
  updatetagence(id, data) {
    return this.http.put(`${this.baseUrl}/updagences/` + id, data)
  }
  getagenceById(id) {
    return this.http.get(`${this.baseUrl}/agence/` + id)
  }
 // service fichier
  addfiles(data) {
    return this.http.post(`${this.baseUrl}/addfiles`, data)
  }
  getfiles() {
    return this.http.get(`${this.baseUrl}/filesf`)
  }
  upload(formData) {
    return this.http.post(`${this.baseUrl}/uploadf`, formData)
  }

 // service documentation
  deletedoc(id) {
    return this.http.delete(`${this.baseUrl}/deletedoc/` + id)
  }
  getfilesd() {
    return this.http.get(`${this.baseUrl}/filesd`)
  }
  uploadd(formData) {
    return this.http.post(`${this.baseUrl}/uploadd`, formData)
  }

 // service challenge
  getchallenge() {
    return this.http.get(`${this.baseUrl}/getchallenge`)
  }
  addChallenges(data) {
    return this.http.post(`${this.baseUrl}/addChallenges`, data)
  }
  addChallengesAgences(id) {
    return this.http.post(`${this.baseUrl}/addChallengesAgences/` + id, null);
  }
  updateRanKForOneAgence(rang, idagence, idchallange) {
    return this.http.put(`${this.baseUrl}/updatechallangeagence/` + idagence + "/" + idchallange, rang);
  }
  getresult(idchallange) {
    return this.http.get(`${this.baseUrl}/getchalrang/` + idchallange)
  }


 // service evenement
  getevent(): Observable<Eventss[]> {
    return this.http.get<Eventss[]>(`${this.baseUrl}/getevent`)
  }
  deletevent(id) {
    return this.http.delete(`${this.baseUrl}/deleteEvent/` + id)
  }
  getevenementById(id) {
    return this.http.get(`${this.baseUrl}/evenement/` + id)
  }
  uploadevent(formData:FormData,token) {
    return this.http.post(`${this.baseUrl}/uploadevent`, formData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    })
  }
  addEvent(data) {
    return this.http.post(`${this.baseUrl}/addevent`, data)
  }






  addUserToEvent(iduser,idevent) {
    return this.http.post(`${this.baseUrl}/affecterusertoevent/`+ iduser+`/`+idevent, {})
  }
  annulation(iduser,idevent) {
    return this.http.delete(`${this.baseUrl}/annulation/`+ iduser+"/"+idevent)
  }
  getuserByevent(idevent) {
    return this.http.get(`${this.baseUrl}/getallabonner/` + idevent )
  }




  getCategorieById(id) {
    return this.http.get(`${this.baseUrl}/getCategorieById/` + id)
  }
  getcategory() {
    return this.http.get(`${this.baseUrl}/getcategory`)
  }

  getCibleById(id) {
    return this.http.get(`${this.baseUrl}/getCibleById/` + id)
  }
  getcible() {
    return this.http.get(`${this.baseUrl}/getcible`)
  }

  getconvention() {
    return this.http.get(`${this.baseUrl}/getconvention`)
  }
  addconvention(idcat:any, idcib:any,data) {
    return this.http.post(`${this.baseUrl}/addconvention/` + idcat + `/` + idcib, data)
  }
  getconvByCate(idcat) {
    return this.http.get(`${this.baseUrl}/getconvByCate/` + idcat)
  }



  getsuggestion() {
    return this.http.get(`${this.baseUrl}/getsuggestion`)
  }
  addsuggestion( iduser: any, data) {
    return this.http.post(`${this.baseUrl}/addsuggestion/` + iduser , data)
  }
  getsuggestionById(id) {
    return this.http.get(`${this.baseUrl}/getsuggestionById/` + id)
  }

  updasuggestion(id, data) {
    return this.http.put(`${this.baseUrl}/updasuggestion/` + id, data)
  }



  getsondages() {
    return this.http.get(`${this.baseUrl}/getsondages`)
  }
  addsondages(iduser:any, data) {
    return this.http.post(`${this.baseUrl}/addsondages/` + iduser, data)
  }
  addreponse(iduser:any,sondageid:any,data){
    return this.http.post(`${this.baseUrl}/addreponce/` + iduser+'/'+sondageid, data)
  }
  deletesondage(id) {
    return this.http.delete(`${this.baseUrl}/deletesondage/` + id)
  }


  getpost() {
    return this.http.get(`${this.baseUrl}/getpost`)
  }
  addpost(iduser: any, data) {
    return this.http.post(`${this.baseUrl}/addpost/` + iduser, data)
  }
  addcommentaire(iduser: any,post_id:any, data) {
    return this.http.post(`${this.baseUrl}/addcommentaire/` + iduser + '/' + post_id, data)
  }
  getcommentaireById(id) {
    return this.http.get(`${this.baseUrl}/getcommentaireByIdt/` + id)
  }
  deletecomm(idd) {
    return this.http.delete(`${this.baseUrl}/deletecommentaire/` + idd)
  }
  deletepost(idp) {
    return this.http.delete(`${this.baseUrl}/deletepost/` + idp)
  }
  getcommentaire(){
  return this.http.get(`${this.baseUrl}/getcommentaire` )
}
}
