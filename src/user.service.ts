import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  login(loginDetails:any){
    const header=new HttpHeaders({
        'Content-Type': 'application/json'
    })
    return this.httpClient.post('http://localhost:3000/login', loginDetails, {headers:header})
  }
}
