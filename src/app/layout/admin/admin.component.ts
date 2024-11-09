import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  ChangeBackground($event: MouseEvent, link: string) {

    let all_a=document.querySelectorAll('.activeStyle')
    all_a.forEach((a)=>{
      a.classList.remove('active')
    })
    let target=event?.target as HTMLElement
    target.classList.add('active')

  }
}
