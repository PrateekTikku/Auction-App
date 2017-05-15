"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by prausa on 5/3/2017.
 */
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/debounceTime");
var ApplicationComponent = (function () {
    function ApplicationComponent() {
        var _this = this;
        this.searchInput = new forms_1.FormControl();
        this.searchInput.valueChanges.debounceTime(500).subscribe(function (value) { return _this.print(value); });
    }
    ApplicationComponent.prototype.print = function (value) {
        console.log("The input value is " + value);
    };
    return ApplicationComponent;
}());
ApplicationComponent = __decorate([
    core_1.Component({
        selector: 'auction-application',
        templateUrl: 'app/components/application/application.html',
        styleUrls: ['app/components/application/application.css'],
        encapsulation: core_1.ViewEncapsulation.None
    })
], ApplicationComponent);
exports.default = ApplicationComponent;
