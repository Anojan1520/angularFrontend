import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskServiceService } from '../task-service.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {


  TaskForm: FormGroup

  Users: any = []



  constructor(private fb: FormBuilder, private taskService: TaskServiceService, private router: Router, private UserTaskService: UserService) {
    this.TaskForm = fb.group({
      title: ['', [Validators.required]],
      duedate: ['', [Validators.required]],
      description: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      assigneeId: ['', [Validators.required]],
      checkList: this.fb.array([])
    })
  }
  ngOnInit(): void {
    this.UserTaskService.GetUser().subscribe((u: any) => {
      this.Users = u
    })
  }


  get checkList(): FormArray {
    return this.TaskForm.get('checkList') as FormArray;
  }

  addChecklistItem(): void {
    this.checkList.push(this.fb.group({
      name: [''],
      isDone: [false]
    }));
  }

  removeChecklistItem(index: number): void {
    this.checkList.removeAt(index);
  }


  FormSubmited(FormData: FormGroup) {
    console.log(FormData.value)
    this.taskService.PostTask(FormData.value).subscribe(d => {
      alert("Task added Succesfully")
      this.router.navigate(['/'])
    })
  }

}
