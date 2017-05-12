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
var StarsComponent = (function () {
    function StarsComponent() {
        this.count = 5;
        this.rating = 0;
        this.stars = [];
    }
    StarsComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.count; i++) {
            this.stars.push(i > this.rating - 1);
        }
    };
    return StarsComponent;
}());
__decorate([
    core_1.Input()
], StarsComponent.prototype, "count", void 0);
__decorate([
    core_1.Input()
], StarsComponent.prototype, "rating", void 0);
StarsComponent = __decorate([
    core_1.Component({
        selector: 'auction-stars',
        templateUrl: 'app/components/stars/stars.html',
        styles: [".starrating {color : #d17581; }"]
    })
], StarsComponent);
exports.default = StarsComponent;
