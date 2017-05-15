"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_1 = require("app/components/home/home");
var product_detail_1 = require("./components/product-detail/product-detail");
var weather_1 = require("app/components/weather/weather");
exports.routes = [
    { path: '', component: home_1.default },
    { path: 'products/:productId', component: product_detail_1.default },
    { path: 'weather', component: weather_1.WeatherComponent }
];
