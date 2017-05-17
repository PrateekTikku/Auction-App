/**
 * Created by prausa on 5/17/2017.
 */
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Stock} from "./stockInterface";

@Component({
    selector : 'left-child',
    templateUrl : 'app/components/chapter 6/left-child.html'
})
export class LeftChildComponent{
    @Output('PriceChanged') stock : EventEmitter <Stock> = new EventEmitter();
    private price : number;
    private company : string;
    private _input : string;
    private _counter : number = 0;
    constructor(){
        let objectPassed : Stock = {company : '', price : 0};
        let intervalID = setInterval(()=>{
            this.price = Math.round(Math.random() * 1000);
            this.company = 'Prateek' + Math.round(Math.random() * 10);
            objectPassed.price = this.price;
            objectPassed.company = this.company;
            this.stock.emit(objectPassed);
            if(++this._counter === 10)
                clearInterval(intervalID);
        },2000);
    }
    @Input()
    set input(value : string){
        // console.log('Setter is called with value-',value,typeof value);
        if(value)
            this._input = value;
    }
    get input() : string{
        // console.log('Getter is called and value returned is-', this._input);
        return this._input;
    }
}