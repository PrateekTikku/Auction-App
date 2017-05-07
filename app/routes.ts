/**
 * Created by user-pc on 5/7/2017.
 */
import {Routes} from '@angular/router';
import HomeComponent from 'app/components/home/home';
import ProductDetailComponent from "./components/product-detail/product-detail";

export const routes : Routes = [
    {path : '', component : HomeComponent},
    {path : 'products/:productTitle' , component : ProductDetailComponent}
];