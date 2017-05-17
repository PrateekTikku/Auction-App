/**
 * Created by user-pc on 5/7/2017.
 */
import {Component} from '@angular/core';
import Product from '../../services/product-service';
import {ProductService} from '../../services/product-service';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'auction-home-page',
    styleUrls: ['app/components/home/home.css'],
    templateUrl: 'app/components/home/home.html'
})
export default class HomeComponent {
    products: Product[] = [];
    titleFilter : FormControl = new FormControl();
    filterCriteria : string;
    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
        this.titleFilter.valueChanges
            .debounceTime(200)
            .subscribe(value => {this.filterCriteria = value}, error => console.log(error));
    }
}