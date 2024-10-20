import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  Users: any[] = [];
  Search: string = '';


  constructor(private user: UserService, private router: Router, private toaster: ToastrService) {

  }
  ngOnInit(): any {
    this.getAlluser();
  }

  getAlluser() {
    this.user.GetUser().subscribe((p: any) => {
      this.Users = p;
      console.log(p)
    })
  }
  DeleteUser(id: string) {
    return this.user.DeleteUser(id).subscribe((d: any) => {
      this.toaster.success('Deleted Succesfully', '', {
        timeOut: 3000,
      })
      this.getAlluser()
    })
  }
  editUser(id: any) {
    this.router.navigate(['edit/' + id])
  }
}
