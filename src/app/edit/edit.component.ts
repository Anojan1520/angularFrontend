import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task, TaskServiceService } from '../task-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {



  TaskForm:FormGroup

   

  constructor(private fb:FormBuilder ,private taskService:TaskServiceService,private router:Router,private route:ActivatedRoute,private toaster : ToastrService){
     this.TaskForm=fb.group({
      id:[],
      title:['',[Validators.required]],
      duedate:['',[Validators.required]],
      description:['',[Validators.required]],
      priority:['',[Validators.required]],
      assigneeId:['',[Validators.required]]
     })
  }



  ngOnInit(): void {
    let Tid:any= this.route.snapshot.paramMap.get('id')
    this.taskService.GetTaskById(Tid).subscribe((d:any)=>{
      let formatedDte =new Date(d.duedate).toISOString().slice(0,10);
      console.log(formatedDte)
      const obj = {
         id:d.id,
         duedate:formatedDte,
         title:d.title,
         description:d.description,
         priority:d.priority,
         assigneeId:d.assigneeId
         
      }
        console.log(obj)
      this.TaskForm.setValue(obj);
    })

  }


  EditSubmit(task:any){
    console.log(task.value)
     this.taskService.UpdateData(task.value).subscribe(d=>{
      this.toaster.success('Edit Succefully','',{
        timeOut:9000,
      })
      this.router.navigate(['/'])
     })
  }
  
}
