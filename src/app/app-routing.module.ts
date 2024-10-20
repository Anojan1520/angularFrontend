import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { FormComponent } from './form/form.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [{path:'',component:TaskComponent}
    ,{path:'form',component:FormComponent},
    {path:'edit/:id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
