import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  signinForm:FormGroup;


  constructor(private fb: FormBuilder) {
     this.signinForm=this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      terms:[false,[Validators.required]]
     })
  }

}
