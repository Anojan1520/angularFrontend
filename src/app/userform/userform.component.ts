import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskServiceService } from '../task-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.css'
})
export class UserformComponent implements OnInit {


  userForm!: FormGroup;
  isEditMode: boolean = false;
  title: string = 'Add New User';
  Uid: any;
  tasks:any[]=[]

  constructor(private fb: FormBuilder, private UserService: UserService,private TaskService:TaskServiceService, private router: Router, private route: ActivatedRoute, private tostr: ToastrService) {
    this.Uid = this.route.snapshot.paramMap.get('id')

    console.log(this.Uid)
    if (this.Uid) {
      this.isEditMode = true;
      this.title = "Update User"
    }
    if (this.isEditMode == false) {
      this.userForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        password: ['', Validators.required],
        address: this.fb.group({
          addressLine1: ['', [Validators.required]],
          addressLine2: [''],
          city: ['', Validators.required]
        })
      })
    } else if (this.isEditMode == true) {
      this.userForm = this.fb.group({
        id: [],
        name: ['', Validators.required],
        email: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        password: ['', Validators.required],
        address: this.fb.group({
          id:[''],
          addressLine1: ['', [Validators.required]],
          addressLine2: [''],
          city: ['', Validators.required],
          userId:['']
        })
      })
    }

  }
  ngOnInit(): void {

    if (this.isEditMode == true) {
      this.UserService.GetUserById(this.Uid).subscribe((d: any) => {
        this.tasks=d.task
        let obj = {
          id: d.id,
          name: d.name,
          email: d.email,
          phoneNumber: d.phoneNumber,
          password: d.password,
          address: {
            id:d.address.id,
            addressLine1: d.address.addressLine1,
            addressLine2: d.address.addressLine2,
            city: d.address.city,
            userId: d.address.userId, 
          }

        }
        console.log(obj)
        this.userForm.setValue(obj)
      })

      
    }
  }

  FormSubmited(FormData: FormGroup) {
    console.log(FormData.value)
    if (this.isEditMode == false) {
      this.UserService.PostUser(FormData.value).subscribe(d => {
        this.tostr.success("Task added Succesfully")
        this.router.navigate(['Admin/user'])
      })
    } else if (this.isEditMode == true) {
      this.UserService.UpdateData(FormData.value).subscribe(d => {
        this.tostr.success('Edited SuccesFully')
        this.router.navigate(['Admin/user'])

      })
    }
  }

}
