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
            { name: 'Manohar1', code: 'MA100', gender: 'Male', salary: 123.4, dateOfBirth: '5/5/1985' },
            { name: 'Sofia 2', code: 'MA101', gender: 'FeMale', salary: 123, dateOfBirth: '11/25/1985' },
            { name: 'Manohar3', code: 'MA102', gender: 'Male', salary: 123.47, dateOfBirth: '2/15/1985' }
        ];
    }
    EmployeeListComponent.prototype.getEmployees = function () {
        this.employees = [
            { name: 'Manohar1', code: 'MA100', gender: 'Male', salary: 123.4, dateOfBirth: '2/15/1985' },
            { name: 'Sofia 2', code: 'MA101', gender: 'FeMale', salary: 123.4, dateOfBirth: '2/15/1985' },
            { name: 'Manohar3', code: 'MA102', gender: 'Male', salary: 123.4, dateOfBirth: '2/15/1985' },
            { name: 'Sofia 4', code: 'MA103', gender: 'FeMale', salary: 123.4, dateOfBirth: '2/15/1985' }
        ];
    };
    EmployeeListComponent.prototype.trackByEmpCode = function (index, x) {
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