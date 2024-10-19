import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskServiceService } from '../task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
      
  
   TaskForm:FormGroup

   

  constructor(private fb:FormBuilder ,private taskService:TaskServiceService,private router:Router){
     this.TaskForm=fb.group({
      title:['',[Validators.required]],
      duedate:['',[Validators.required]],
      description:['',[Validators.required]],
      priority:['',[Validators.required]]
     })
  }

  FormSubmited(FormData:FormGroup){
    console.log(FormData.value)
       this.taskService.PostData(FormData.value).subscribe(d=>{
        alert("Task added Succesfully")
        this.router.navigate(['/'])
       })
  }

}
