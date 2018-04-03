import {Component} from '@angular/core';

@Component({
  selector: 'list-employee',
  templateUrl: 'app/employee/employeeList.component.html'
})
export class EmployeeListComponent{
	employees = [
    {name:'Manohar1',code:'MA100'},
    {name:'Manohar2',code:'MA101'},
    {name:'Manohar3',code:'MA102'}
	];
	//employees = [];

}