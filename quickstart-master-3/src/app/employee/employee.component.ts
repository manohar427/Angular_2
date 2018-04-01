import { Component } from '@angular/core';

@Component({
  selector: 'my-employee',
  templateUrl: 'app/employee/employee.component.html',
  //styles: ['td{border: 1px solid red;}']
  styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent
{   
    employeeColSpan:number=2;
	firstName:string = 'Abc';
	lastName:string = 'Def';
	gender:string = 'Male';
	age:number = 20;

}