import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { EditComponent } from './edit/edit.component';
import { UserComponent } from './user/user.component';
import { UserformComponent } from './userform/userform.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { SignUpComponent } from './UserAuthentication/sign-up/sign-up.component';
import { SignInComponent } from './UserAuthentication/sign-in/sign-in.component';

const routes: Routes = [{path:'task',component:TaskComponent}
    ,{path:'form',component:FormComponent},
    {path:'edit/:id',component:EditComponent},
    {path:'user',component:UserComponent},
    {path:'user-form/:id',component:UserformComponent},
    {path:'user-form',component:UserformComponent},
    {path:'',component:HomeComponent},
    {path:'signup',component:SignUpComponent},
    {path:'signin',component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
