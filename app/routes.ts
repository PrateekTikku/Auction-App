/**
 * Created by user-pc on 5/7/2017.
 */
import {Routes} from '@angular/router';
import HomeComponent from 'app/components/home/home';
import ProductDetailComponent from "./components/product-detail/product-detail";
import {WeatherComponent} from "app/components/weather/weather";
import {Chapter6ParentComponent} from "./components/chapter 6/chapter6";

export const routes : Routes = [
    {path : '', component : HomeComponent},
    {path : 'products/:productId' , component : ProductDetailComponent},
    {path : 'weather', component : WeatherComponent},
    {path : 'bindings', component : Chapter6ParentComponent}
];