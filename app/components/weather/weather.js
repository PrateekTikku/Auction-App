"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by user-pc on 5/15/2017.
 */
var core_1 = require("@angular/core");
var config_1 = require("../../config");
var forms_1 = require("@angular/forms");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/map");
require("rxjs/add/operator/debounceTime");
var WeatherComponent = (function () {
    function WeatherComponent(WEATHER_API, http) {
        var _this = this;
        this.WEATHER_API = WEATHER_API;
        this.http = http;
        this.searchInput = new forms_1.FormControl();
        this.searchInput.valueChanges
            .debounceTime(200)
            .switchMap(function (city) { return _this.getWeather(city); })
            .subscribe(function (response) {
            if (response.cod === '404')
                return;
            else if (!response.main)
                console.log("City is not found");
            else {
                _this.temperature = "Current temperature in " + response.name + " is " + response.main.temp + " \u00B0C and humidity is " + response.main.humidity + "%";
            }
        }, function (err) {
            console.log("Can't get weather");
        });
    }
    WeatherComponent.prototype.getWeather = function (city) {
        if (city) {
            return this.http.get(this.WEATHER_API.BASE_WEATHER_URL + city + this.WEATHER_API.BASE_WEATHER_SUFFIX)
                .map(function (res) {
                return res.json();
            }).catch(function (err) {
                if (err.status === 404) {
                    console.log("City " + city + " not found");
                    return Rx_1.Observable.of();
                } // empty observable
            });
        }
        return Rx_1.Observable.of();
    };
    return WeatherComponent;
}());
WeatherComponent = __decorate([
    core_1.Component({
        selector: 'weather',
        templateUrl: 'app/components/weather/weather.html',
        providers: [{ provide: config_1.CONFIG_TOKEN, useValue: config_1.CONFIG.WEATHER }]
    }),
    __param(0, core_1.Inject(config_1.CONFIG_TOKEN))
], WeatherComponent);
exports.WeatherComponent = WeatherComponent;
