import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http: HttpClient) { }


  regUrl: string = "http://localhost:5052/api/UserLogins/RegisterUser";
  loginUrl: string = "http://localhost:5052/api/UserLogins/LoginUser"


  registeration(data: any,options:{ responseType: 'text' }) {
    return this.http.post(this.regUrl, data,options)
  }

  login(data:any ,options:{ responseType: 'text' }) {
    return this.http.post(this.loginUrl , data ,options)
  }




}
