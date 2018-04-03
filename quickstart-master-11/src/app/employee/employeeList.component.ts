import {Component} from '@angular/core';

@Component({
  selector: 'list-employee',
  templateUrl: 'app/employee/employeeList.component.html'
})
export class EmployeeListComponent{

    employees:any[];

    constructor(){
        this.employees = [
		    {name:'Manohar1',code:'MA100',gender:'Male',salary:123.4,dateOfBirth:'5/5/1985'},
		    {name:'Sofia 2',code:'MA101',gender:'FeMale',salary:123,dateOfBirth:'11/25/1985'},
		    {name:'Manohar3',code:'MA102',gender:'Male',salary:123.47,dateOfBirth:'2/15/1985'}
	    ];
    }
	
	getEmployees():void{
        this.employees = [
		    {name:'Manohar1',code:'MA100',gender:'Male',salary:123.4,dateOfBirth:'2/15/1985'},
		    {name:'Sofia 2',code:'MA101',gender:'FeMale',salary:123.4,dateOfBirth:'2/15/1985'},
		    {name:'Manohar3',code:'MA102',gender:'Male',salary:123.4,dateOfBirth:'2/15/1985'},
		    {name:'Sofia 4',code:'MA103',gender:'FeMale',salary:123.4,dateOfBirth:'2/15/1985'}
	    ];
	}

	trackByEmpCode(index:number,x:any):string{
       return x.code;
	}

}