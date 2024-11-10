import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  userForm: FormGroup;

  constructor(private router:Router,private fb: FormBuilder, private UserAuth: AuthenticationService ,private toster:ToastrService) {

    this.userForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      role: ['1', Validators.required],
      terms: [null, Validators.required]
    })


  }


  FormSubmit(){
  
    if (this.userForm.get('password')?.value === this.userForm.get('confirmPassword')?.value) {
      const registrationData = {
        fullname: this.userForm.get('userName')?.value,   
        email: this.userForm.get('email')?.value,        
        password: this.userForm.get('password')?.value,    
        role: Number(this.userForm.get('role')?.value)    
      };
    
      this.UserAuth.registeration(registrationData,{ responseType: 'text' }).subscribe((d:any) => {
        console.log(d);
        this.router.navigate([''])
  
      })
    }else{
      this.toster.error('Your Password not match')
    }
   
  }



 


}
