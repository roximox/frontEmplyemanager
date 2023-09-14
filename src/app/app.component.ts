import {Component, OnInit} from '@angular/core';
import {Employee} from "./controler/model/employee.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {EmployeeService} from "./controler/service/employee.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public employees!:Employee[];
  constructor(private emloyeeService: EmployeeService){}
  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.emloyeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees =response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
