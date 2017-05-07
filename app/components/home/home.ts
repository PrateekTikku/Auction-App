/**
 * Created by user-pc on 5/7/2017.
 */
import {Component} from '@angular/core';
import Product from '../../services/product-service';
import {ProductService} from '../../services/product-service';

@Component({
    selector: 'auction-home-page',
    styleUrls: ['app/components/home/home.css'],
    templateUrl: 'app/components/home/home.html'
})
export default class HomeComponent {
    products: Product[] = [];

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
    }
}