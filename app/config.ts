import {OpaqueToken} from '@angular/core';
export let CONFIG_TOKEN = new OpaqueToken('');

export const CONFIG = {
    WEATHER : {
        BASE_WEATHER_URL : 'http://api.openweathermap.org/data/2.5/weather?q=',
        BASE_WEATHER_SUFFIX : '&units=metric&type=accurate&appid=bc8b7ea710be3d45d6750856af01ece3'
    }
};