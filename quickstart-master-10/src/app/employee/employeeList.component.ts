import {Component} from '@angular/core';

@Component({
  selector: 'list-employee',
  templateUrl: 'app/employee/employeeList.component.html'
})
export class EmployeeListComponent{

    employees:any[];

    constructor(){
        this.employees = [
		    {name:'Manohar1',code:'MA100'},
		    {name:'Manohar2',code:'MA101'},
		    {name:'Manohar3',code:'MA102'}
	    ];
    }
	
	getEmployees():void{
        this.employees = [
		    {name:'Manohar1',code:'MA100'},
		    {name:'Manohar2',code:'MA101'},
		    {name:'Manohar3',code:'MA102'},
		    {name:'Manohar4',code:'MA103'}
	    ];
	}

	trackByEmpCode(index:number,x:any):string{
	   console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXxx:"+x.code);
       return x.code;
	}

}