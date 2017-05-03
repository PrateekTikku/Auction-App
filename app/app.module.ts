import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import ApplicationComponent  from './components/application/application';
import ProductItemComponent  from './components/product-item/product-item';
import StarsComponent  from './components/stars/stars';
import {ProductService} from './services/product-service';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ ApplicationComponent, ProductItemComponent, StarsComponent ],
    bootstrap:    [ ApplicationComponent ],
    providers : [ProductService]
})
export class AppModule { }
