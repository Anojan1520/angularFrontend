import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http:HttpClient) { }

  Url:string='http://localhost:5052/api/TaskItems';

   GetTask(){
    return this.http.get<Task[]>(this.Url)
   }
   PostTask(data:FormGroup){
    return this.http.post(this.Url,data)
   }
   DeleteTask(data:string){
    return this.http.delete(this.Url+'/'+data)
   }
   GetTaskById(data:string){
    return this.http.get<Task[]>(this.Url+'/'+data)
   }
   UpdateData(data:any){
    return this.http.put(this.Url+'/'+data.id,data)
   }



}

export interface Task{
  id:number,
  title:string,
  duedate:string,
  description:string,
  priority:string,
  User:string
}
