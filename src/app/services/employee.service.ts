import { Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/iemployee';
import { employeeData } from '../data/employee-data';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Array<IEmployee>;

  constructor() { 
    this.employees = employeeData;
  }

  getEmployees(): Array<IEmployee> {
    return this.employees;
  }

}
