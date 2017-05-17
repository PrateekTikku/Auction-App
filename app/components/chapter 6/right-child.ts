/**
 * Created by prausa on 5/17/2017.
 */
import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChange} from '@angular/core';
import {Stock} from "./stockInterface";

interface IChanges{
    [key:string] : SimpleChange
}
@Component({
    selector : 'right-child',
    templateUrl : 'app/components/chapter 6/right-child.html',
    changeDetection : ChangeDetectionStrategy.Default
})
export class RightChildComponent implements OnChanges{
    // public companyName : string;
    // public companyPrice : number;
    @Input()
    public companyStock : Stock;
    constructor(){
    }
    ngOnChanges(changes : IChanges){ //Invoked only when first change is made. Because the reference of the object is not changed in leftChild constructor's setInterval method. the object 'objectPassed' is created only once inside the constructor and thereafter only its properties are changes. The reference to the object does not get changed
        console.log(JSON.stringify(changes, null, 2));
        console.log("First Change", changes['companyStock'].isFirstChange());
    }
    // @Input() set companyStock(value: Stock ){
    //     if (value) {
    //         this._companyStock = value;
    //         this.companyName = value.company;
    //         this.companyPrice= value.price;
    //     }
    // }
    // get companyStock() {
    //     return this._companyStock;
    // }
}