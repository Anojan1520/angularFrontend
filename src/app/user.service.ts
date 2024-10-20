import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  Url:string='https://localhost:7200/api/Users';

   GetUser(){
    return this.http.get<any[]>(this.Url)
   }
   PostUser(data:FormGroup){
    return this.http.post(this.Url,data)
   }
   DeleteUser(data:string){
    return this.http.delete(this.Url+'/'+data)
   }
   GetUserById(data:string){
    return this.http.get<any[]>(this.Url+'/'+data)
   }
   UpdateData(data:any){
    return this.http.put(this.Url+'/'+data.id,data)
   }

}
