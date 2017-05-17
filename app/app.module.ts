import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import ApplicationComponent from "./components/application/application";
import ProductItemComponent from "./components/product-item/product-item";
import StarsComponent from "./components/stars/stars";
import HomeComponent from "./components/home/home";
import {ProductService} from "./services/product-service";
import {routes} from "./routes";
import ProductDetailComponent from "./components/product-detail/product-detail";
import {ReactiveFormsModule} from "@angular/forms";
import {WeatherComponent} from "./components/weather/weather";
import {HttpModule} from "@angular/http";
import {FilterPipe} from "./pipes/filter-pipe";
import {LeftChildComponent} from "./components/chapter 6/left-child";
import {Chapter6ParentComponent} from "./components/chapter 6/chapter6";
import {RightChildComponent} from "./components/chapter 6/right-child";

let declarations = [
    ApplicationComponent,
    ProductItemComponent,
    StarsComponent,
    HomeComponent,
    ProductDetailComponent,
    WeatherComponent,
    FilterPipe,
    Chapter6ParentComponent,
    LeftChildComponent,
    RightChildComponent
];
@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes), ReactiveFormsModule, HttpModule],
    declarations: declarations,
    bootstrap: [ApplicationComponent],
    providers: [ProductService, {
        provide: LocationStrategy, useClass: HashLocationStrategy
    }]
})
export class AppModule {
}
