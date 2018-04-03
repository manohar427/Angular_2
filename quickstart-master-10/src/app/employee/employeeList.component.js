"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var EmployeeListComponent = (function () {
    function EmployeeListComponent() {
        this.employees = [
            { name: 'Manohar1', code: 'MA100',salary:345.6,dateOfBirth:'6/24/1980' },
            { name: 'Manohar2', code: 'MA101',salary:345.46,dateOfBirth:'6/24/1980' },
            { name: 'Manohar3', code: 'MA102',salary:34,dateOfBirth:'6/24/1980' }
        ];
    }
    EmployeeListComponent.prototype.getEmployees = function () {
        this.employees = [
            { name: 'Manohar1', code: 'MA100',salary:344.6,dateOfBirth:'1/24/1980' },
            { name: 'Manohar2', code: 'MA101',salary:3444.6,dateOfBirth:'8/14/1980' },
            { name: 'Manohar3', code: 'MA102',salary:345.65,dateOfBirth:'5/4/1980' },
            { name: 'Manohar4', code: 'MA103',salary:345,dateOfBirth:'6/2/1980' }
        ];
    };
    EmployeeListComponent.prototype.trackByEmpCode = function (index, x) {
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXxx:" + x.code);
        return x.code;
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'list-employee',
        templateUrl: 'app/employee/employeeList.component.html'
    }),
    __metadata("design:paramtypes", [])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map