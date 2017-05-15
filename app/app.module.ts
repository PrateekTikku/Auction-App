import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import ApplicationComponent  from './components/application/application';
import ProductItemComponent  from './components/product-item/product-item';
import StarsComponent  from './components/stars/stars';
import HomeComponent from './components/home/home';
import {ProductService} from './services/product-service';
import {routes} from './routes';
import ProductDetailComponent from "./components/product-detail/product-detail";
import {ReactiveFormsModule} from "@angular/forms";
import {WeatherComponent} from "./components/weather/weather";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes), ReactiveFormsModule, HttpModule],
    declarations: [ApplicationComponent, ProductItemComponent, StarsComponent, HomeComponent, ProductDetailComponent, WeatherComponent],
    bootstrap: [ApplicationComponent],
    providers: [ProductService, {
        provide: LocationStrategy, useClass: HashLocationStrategy
    }]
})
export class AppModule {
}
