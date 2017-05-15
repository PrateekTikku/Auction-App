/**
 * Created by prausa on 5/3/2017.
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'auction-application',
    templateUrl: 'app/components/application/application.html',
    styleUrls: ['app/components/application/application.css'],
    encapsulation: ViewEncapsulation.None
})
export default class ApplicationComponent {
    searchInput : FormControl = new FormControl();
    constructor(){
        this.searchInput.valueChanges.debounceTime(500).subscribe(value => this.print(value));
    }
    print(value : String):void{
        console.log(`The input value is ${value}`);
    }
}