"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
exports.CONFIG_TOKEN = new core_1.OpaqueToken('');
exports.CONFIG = {
    WEATHER: {
        BASE_WEATHER_URL: 'http://api.openweathermap.org/data/2.5/weather?q=',
        BASE_WEATHER_SUFFIX: '&units=metric&type=accurate&appid=bc8b7ea710be3d45d6750856af01ece3'
    }
};
