import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector : 'product-detail',
    templateUrl : 'app/components/product-detail/product-detail.html',
    styleUrls : ['app/components/product-detail/product-detail.css']
})
export default class ProductDetailComponent{
    productTitle : String;
    constructor(route : ActivatedRoute){
        this.productTitle = route.snapshot.params['productTitle'];
    }
}