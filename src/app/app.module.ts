import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './employes/employee-create/employee-create.component';
// @ts-ignore
import { EnvironmentsComponent } from './environments/environments/environments.component';
import {EmployeeService} from "./controler/service/employee.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
