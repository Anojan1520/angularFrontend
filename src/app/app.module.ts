import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { setTheme } from "ngx-bootstrap/utils";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EditComponent } from "./edit/edit.component";
import { FormComponent } from "./form/form.component";
import { HomeComponent } from "./home/home.component";
import { TaskFilterPipe } from "./task-filter.pipe";
import { TaskComponent } from "./task/task.component";
import { UserFilterPipe } from "./user-filter.pipe";
import { UserComponent } from "./user/user.component";
import { SignInComponent } from "./UserAuthentication/sign-in/sign-in.component";
import { SignUpComponent } from "./UserAuthentication/sign-up/sign-up.component";
import { UserformComponent } from "./userform/userform.component";
import { AdminComponent } from './layout/admin/admin.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    FormComponent,
    TaskFilterPipe,
    EditComponent,
    UserComponent,
    UserFilterPipe,
    UserformComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    AdminComponent,
    UserLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {
    setTheme('bs5'); 
  }
}
