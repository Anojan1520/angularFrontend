import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from '../task-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.css'
})
export class UserformComponent {
  

  userForm:FormGroup

  constructor(private fb:FormBuilder ,private taskService:TaskServiceService,private router:Router){
     this.userForm=fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      address:['',Validators.required],
      password:['',Validators.required]
     })
  }

  FormSubmited(FormData:FormGroup){
    console.log(FormData.value)
       this.taskService.PostTask(FormData.value).subscribe(d=>{
        alert("Task added Succesfully")
        this.router.navigate(['user'])
       })
  }
}
