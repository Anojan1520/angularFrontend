import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



  ChangeBackground($event: MouseEvent, link: string) {

    let all_a=document.querySelectorAll('.activeStyle')
    all_a.forEach((a)=>{
      a.classList.remove('active')
    })
    let target=event?.target as HTMLElement
    target.classList.add('active')

  }
  title = 'AngulartaskManager';
}
