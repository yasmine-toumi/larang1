import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }
  uploadevent(formData): Observable<any>{
    return this.http.post<any>(this.baseUrl +"/uploadevent", formData)
  }
}
