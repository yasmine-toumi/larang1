import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';
import { Agence } from '../agences/agence';
import { Eventss } from '../amicale/eventss';
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
    return this.http.get(`${this.baseUrl}/utilisateur/` + id)
  }
  updatetData(id, data) {
    return this.http.put(`${this.baseUrl}/updateUser/` + id, data)
  }
  searchuser(motCle: string, page: number) {
    return this.http.get(`${this.baseUrl}/searchuser?user=` + motCle + '&page=' + page)
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


  //convention
  deleteconvention(id) {
    return this.http.delete(`${this.baseUrl}/deleteconvention/` + id)
  }
  getconvention() {
    return this.http.get(`${this.baseUrl}/convention`)
  }
  uploadConv(formData) {
    return this.http.post(`${this.baseUrl}/uploadConv`, formData)
  }
}
