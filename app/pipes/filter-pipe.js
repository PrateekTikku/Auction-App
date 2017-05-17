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
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (list, filterBy, filterValue) {
        if (!filterBy || !filterValue)
            return list;
        return list.filter(function (item) {
            var field = item[filterBy].toLowerCase();
            var filter = filterValue.toLowerCase();
            return field.indexOf(filter) > -1;
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    core_1.Pipe({
        'name': 'filter'
    })
], FilterPipe);
exports.FilterPipe = FilterPipe;
