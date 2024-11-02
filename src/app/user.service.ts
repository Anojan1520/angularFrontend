import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  Url:string='http://localhost:5052/api/Users';

   GetUser(){
    return this.http.get<any[]>(this.Url)
   }
   PostUser(data:FormGroup){
    return this.http.post(this.Url,data)
   }
   DeleteUser(data:string){
    return this.http.delete(this.Url+'/'+data)
   }
   GetUserById(data:any){
    return this.http.get<any[]>(this.Url+'/'+data)
   }
   UpdateData(data:any){
    return this.http.put(this.Url+'/'+data.id,data)
   }

}

export interface Address {
  id:number;
  addressLine1: string;
  addressLine2?: string;
  city: string;
}

export interface UserForm {
  id:number;
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  address: Address;
}