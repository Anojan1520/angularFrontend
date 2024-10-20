import { Component, OnInit } from '@angular/core';
import { Task, TaskServiceService } from '../task-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {

  Tasks:Task[]=[];
  Search:string='';

  
  constructor(private task:TaskServiceService,private router:Router,private toaster : ToastrService){

  }
  ngOnInit():any{
    this.getAlltask();
  }

  getAlltask(){
     this.task.GetTask().subscribe((p:any)=>{
      this.Tasks=p;
      console.log(p)
    }) 
  }
  DeleteTask(id:string){
    return this.task.DeleteTask(id).subscribe((d:any)=>{
      this.toaster.success('Deleted Succesfully', '', {
        timeOut: 3000,
      })
      this.getAlltask()
    })
  }
  editTask(id:any){
    this.router.navigate(['edit/'+id])
  }



}
