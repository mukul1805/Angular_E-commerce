import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/login'; 

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    //console.log(credentials)
    return this.http.post(this.apiUrl, credentials);
  }
}
