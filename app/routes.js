"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_1 = require("app/components/home/home");
var product_detail_1 = require("./components/product-detail/product-detail");
var weather_1 = require("app/components/weather/weather");
var chapter6_1 = require("./components/chapter 6/chapter6");
exports.routes = [
    { path: '', component: home_1.default },
    { path: 'products/:productId', component: product_detail_1.default },
    { path: 'weather', component: weather_1.WeatherComponent },
    { path: 'bindings', component: chapter6_1.Chapter6ParentComponent }
];
