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
        this.isBold = true;
        this.fontSize = 30;
        this.isItalic = false;
    }
    AppComponent.prototype.addStyles = function () {
        var styles = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-weight': this.isBold ? 'bold' : 'normal'
        };
        return styles;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<button style='color:red' [style.font-weight]=\"isBold ? 'bold':'normal'\">Submit</button> \n    <br/><br/>\n    <button style='color:red' [style.font-size.px]=\"fontSize\">Submit</button> \n    <br/><br/>\n    <button style='color:red' [ngStyle]=\"addStyles()\">Submit</button> \n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map