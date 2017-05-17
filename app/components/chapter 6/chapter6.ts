/**
 * Created by prausa on 5/17/2017.
 */
import {Component, Input} from '@angular/core';
import {Stock} from "./stockInterface";

@Component({
    selector : 'chapter6-parent',
    templateUrl : 'app/components/chapter 6/chapter_6_parent_bindings_events.html'
})
export class Chapter6ParentComponent{
    public parentStock : Stock;
    protected inputValue : string;
    constructor(){
        this.inputValue = 'Prateek'
    }
    private onInputChange(value :string){
     this.inputValue = value;
    }
    private onPriceChanged(stock : Stock){
        this.parentStock = stock;
    }
}