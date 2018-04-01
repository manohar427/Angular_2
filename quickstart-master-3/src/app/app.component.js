"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Employee Details';
        this.imageLocation = "https://www.ag-grid.com/images/angular2.png";
        this.buttonDisabled = false;
    }
    AppComponent.prototype.getTitle = function () {
        return this.title;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>{{title ? 'AAA '+title :'No Title'}} and {{getTitle()}}\n      <input type='text' value='{{title}}'><br/>\n      <button [disabled]=buttonDisabled>OK</button>\n  <br/>Image1:<img src='{{imageLocation}}'/>\n  <br/>Image2:<img [src]='imageLocation'/>\n  <br/>Image3:<img bind-src='imageLocation'/>\n   <my-employee></my-employee>\n      "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map