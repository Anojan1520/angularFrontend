import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private router : Router) {
  }
  ChangeBackground($event: MouseEvent, link: string) {

    let all_a=document.querySelectorAll('.activeStyle')
    all_a.forEach((a)=>{
      a.classList.remove('active')
    })
    let target=event?.target as HTMLElement
    target.classList.add('active')

  }


  LogOut() {
       localStorage.removeItem('jwt');
       this.router.navigate(['']);

    }
}
