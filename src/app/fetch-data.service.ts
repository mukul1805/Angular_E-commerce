import { Injectable } from '@angular/core';                                         //inject a service into a component to give that component access to the service
import { HttpClient } from '@angular/common/http'                 
import { Observable } from 'rxjs';                                                  //handling async oper. (click)

@Injectable({
  providedIn: 'root'
})

export class FetchDataService {
  data: any
  private apiUrl= 'https://fakestoreapi.com/products';

  constructor( private http: HttpClient) { }

  // getData() : Observable<any> {
  //   this.data = this.http.get<any>(this.apiUrl); 
  //   console.log('works')
  //   console.log(this.data)
  //    return this.http.get(this.apiUrl);
  // }

  // getData() {
  //   this.http.get('https://fakestoreapi.com/products').subscribe((result) => {
  //     this.data = result;
  //     console.log("fetch-data",result)
  //     return this.data
  //   })
  // }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
