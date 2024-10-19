import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
      
  
   TaskForm:FormGroup

  constructor(private fb:FormBuilder , taskService:TaskServiceService){
     this.TaskForm=fb.group({
      Title:['',[Validators]],
      DueDate:[''],
      describe:[''],
      Priority:['']
     })
  }
}
