"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var application_1 = require("./components/application/application");
var product_item_1 = require("./components/product-item/product-item");
var stars_1 = require("./components/stars/stars");
var home_1 = require("./components/home/home");
var product_service_1 = require("./services/product-service");
var routes_1 = require("./routes");
var product_detail_1 = require("./components/product-detail/product-detail");
var forms_1 = require("@angular/forms");
var weather_1 = require("./components/weather/weather");
var http_1 = require("@angular/http");
var filter_pipe_1 = require("./pipes/filter-pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(routes_1.routes), forms_1.ReactiveFormsModule, http_1.HttpModule],
        declarations: [application_1.default, product_item_1.default, stars_1.default, home_1.default, product_detail_1.default, weather_1.WeatherComponent, filter_pipe_1.FilterPipe],
        bootstrap: [application_1.default],
        providers: [product_service_1.ProductService, {
                provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy
            }]
    })
], AppModule);
exports.AppModule = AppModule;
