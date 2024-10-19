import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http:HttpClient) { }

   GetData(){
    return this.http.get<any[]>('https://localhost:7200/api/TaskItems')
   }

}
