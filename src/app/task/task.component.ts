import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {

  Tasks:any[]=[];

  constructor(private task:TaskServiceService){

  }
  ngOnInit():any{
    return this.task.GetData().subscribe((p:any)=>{
      this.Tasks=p;
      console.log(p)
    })
  }

}
