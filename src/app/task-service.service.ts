import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http:HttpClient) { }

  Url:string='https://localhost:7200/api/TaskItems'
   GetData(){
    return this.http.get<any[]>(this.Url)
   }
   PostData(data:FormGroup){
    return this.http.post(this.Url,data)
   }
   DeleteData(data:string){
    return this.http.delete(this.Url+'/'+data)
   }

}
