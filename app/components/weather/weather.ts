/**
 * Created by user-pc on 5/15/2017.
 */
import {Component, Inject, OpaqueToken} from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import {CONFIG_TOKEN, CONFIG} from "../../config";
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'weather',
    templateUrl : 'app/components/weather/weather.html',
    providers : [{provide : CONFIG_TOKEN, useValue : CONFIG.WEATHER}]
})
export class WeatherComponent{
    private temperature : String;
    private searchInput : FormControl = new FormControl();
    constructor(@Inject(CONFIG_TOKEN) private WEATHER_API : {BASE_WEATHER_URL:'',BASE_WEATHER_SUFFIX : ''}, private http : Http){
        this.searchInput.valueChanges
            .debounceTime(200)
            .switchMap(city => this.getWeather(city))
            .subscribe(response => {
                if(response.cod === '404')
                    return;
                else if(!response.main)
                    console.log(`City is not found`);
                else{
                    this.temperature = `Current temperature in ${response.name} is ${response.main.temp} \u00b0C and humidity is ${response.main.humidity}%`;
                }
            },err=>{
                console.log("Can't get weather");
            });
    }
    getWeather(city:String) : Observable<Array<String>>{
        if(city){
            return this.http.get(this.WEATHER_API.BASE_WEATHER_URL + city + this.WEATHER_API.BASE_WEATHER_SUFFIX)
                .map(res => {
                    return res.json();
                }).catch( err => {
                    if (err.status ===404){
                        console.log(`City ${city} not found`) ;
                        return Observable.of()}    // empty observable
                });
        }
        return Observable.of();
    }
}