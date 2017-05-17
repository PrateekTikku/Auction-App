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
var Chapter6ParentComponent = (function () {
    function Chapter6ParentComponent() {
        this.inputValue = 'Prateek';
    }
    Chapter6ParentComponent.prototype.onInputChange = function (value) {
        this.inputValue = value;
    };
    Chapter6ParentComponent.prototype.onPriceChanged = function (stock) {
        this.parentStock = stock;
    };
    return Chapter6ParentComponent;
}());
Chapter6ParentComponent = __decorate([
    core_1.Component({
        selector: 'chapter6-parent',
        templateUrl: 'app/components/chapter 6/chapter_6_parent_bindings_events.html'
    })
], Chapter6ParentComponent);
exports.Chapter6ParentComponent = Chapter6ParentComponent;
