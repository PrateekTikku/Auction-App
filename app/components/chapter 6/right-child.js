"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by prausa on 5/17/2017.
 */
var core_1 = require("@angular/core");
var RightChildComponent = (function () {
    function RightChildComponent() {
    }
    RightChildComponent.prototype.ngOnChanges = function (changes) {
        console.log(JSON.stringify(changes, null, 2));
        console.log("First Change", changes['companyStock'].isFirstChange());
    };
    return RightChildComponent;
}());
__decorate([
    core_1.Input()
], RightChildComponent.prototype, "companyStock", void 0);
RightChildComponent = __decorate([
    core_1.Component({
        selector: 'right-child',
        templateUrl: 'app/components/chapter 6/right-child.html',
        changeDetection: core_1.ChangeDetectionStrategy.Default
    })
], RightChildComponent);
exports.RightChildComponent = RightChildComponent;
