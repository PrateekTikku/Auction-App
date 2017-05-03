/**
 * Created by prausa on 5/3/2017.
 */
import {Component, Input} from '@angular/core';
import Product from 'app/services/product-service';

@Component({
    selector:'auction-product-item',
    templateUrl:'app/components/product-item/product-item.html',
    styleUrls : ['app/components/product-item/product-item.css']
})
export default class ProductItemComponent{
    @Input() product : Product;
}