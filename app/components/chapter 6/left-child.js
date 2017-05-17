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
var LeftChildComponent = (function () {
    function LeftChildComponent() {
        var _this = this;
        this.stock = new core_1.EventEmitter();
        this._counter = 0;
        var objectPassed = { company: '', price: 0 };
        var intervalID = setInterval(function () {
            _this.price = Math.round(Math.random() * 1000);
            _this.company = 'Prateek' + Math.round(Math.random() * 10);
            objectPassed.price = _this.price;
            objectPassed.company = _this.company;
            _this.stock.emit(objectPassed);
            if (++_this._counter === 10)
                clearInterval(intervalID);
        }, 2000);
    }
    Object.defineProperty(LeftChildComponent.prototype, "input", {
        get: function () {
            // console.log('Getter is called and value returned is-', this._input);
            return this._input;
        },
        set: function (value) {
            // console.log('Setter is called with value-',value,typeof value);
            if (value)
                this._input = value;
        },
        enumerable: true,
        configurable: true
    });
    return LeftChildComponent;
}());
__decorate([
    core_1.Output('PriceChanged')
], LeftChildComponent.prototype, "stock", void 0);
__decorate([
    core_1.Input()
], LeftChildComponent.prototype, "input", null);
LeftChildComponent = __decorate([
    core_1.Component({
        selector: 'left-child',
        templateUrl: 'app/components/chapter 6/left-child.html'
    })
], LeftChildComponent);
exports.LeftChildComponent = LeftChildComponent;
