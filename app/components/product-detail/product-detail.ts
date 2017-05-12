import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {default as Product, ProductService, Review} from "../../services/product-service";

@Component({
    selector: 'product-detail',
    templateUrl: 'app/components/product-detail/product-detail.html',
    styleUrls: ['app/components/product-detail/product-detail.css']
})
export default class ProductDetailComponent {
    product: Product;
    reviews: Review[];

    constructor(route: ActivatedRoute, productService: ProductService) {
        let productId = parseInt(route.snapshot.params['productId']);
        this.product = productService.getProductById(productId);
        this.reviews = productService.getReviewsForProduct(productId);
    }
}