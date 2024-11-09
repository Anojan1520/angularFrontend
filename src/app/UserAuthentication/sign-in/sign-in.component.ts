import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  signinForm:FormGroup;


  constructor(private router:Router,private fb: FormBuilder , private UserAuth:AuthenticationService) {
     this.signinForm=this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      terms:[false,[Validators.required]]
     })
  }


  FormSubmit(){
    const LoginData = {
      email: this.signinForm.get('email')?.value,        
      password: this.signinForm.get('password')?.value,    
    };
    console.log(LoginData);

  
    this.UserAuth.login(LoginData,{ responseType: 'text' }).subscribe((d:any) => {
      console.log(d);
      localStorage.setItem('jwt',d)
      this.router.navigate(['Admin/home'])

    })
  }


}
