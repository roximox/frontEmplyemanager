import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Employee} from "../model/employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public apiServerUrl = 'http://localhost:8036';

  constructor(private http: HttpClient) {
  }

  public getEmployees(): Observable<any> {
    return this.http.get<any>('http://localhost:8036/employee/all',);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.get<Employee>('http://localhost:8036/employee/add', employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.get<Employee>('http://localhost:8036/employee/update', employee);
  }

  public deleteEmployees(employeeId: number): Observable<void> {
    return this.http.delete<void>('http://localhost:8036/employee/delete/${employeeeId}');
  }
}
