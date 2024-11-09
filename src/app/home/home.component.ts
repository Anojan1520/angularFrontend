import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private route:Router){

  }
ChangePath(num: number) {

  if (num===1) {
    this.route.navigate(['Admin/user'])
  }else{
    this.route.navigate(['Admin/task'])

  }

}

}
