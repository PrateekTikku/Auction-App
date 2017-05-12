"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by prausa on 5/3/2017.
 */
var Product = (function () {
    function Product(id, title, price, rating, description, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.description = description;
        this.categories = categories;
    }
    return Product;
}());
exports.default = Product;
var Review = (function () {
    function Review(id, productId, timestamp, user, rating, comment) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.comment = comment;
    }
    return Review;
}());
exports.Review = Review;
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        return products.map(function (p) { return new Product(p.id, p.title, p.price, p.rating, p.description, p.categories); });
    };
    ProductService.prototype.getProductById = function (productId) {
        return products.find(function (p) { return p.id === productId; });
    };
    ProductService.prototype.getReviewsForProduct = function (productId) {
        return reviews
            .filter(function (r) { return r.productId === productId; })
            .map(function (r) { return new Review(r.id, r.productId, new Date(Date.parse(r.timestamp)), r.user, r.rating, r.comment); });
    };
    return ProductService;
}());
exports.ProductService = ProductService;
var products = [
    {
        "id": 0,
        "title": "First Product",
        "price": 24.99,
        "rating": 4.3,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["electronics", "hardware"]
    },
    {
        "id": 1,
        "title": "Second Product",
        "price": 64.99,
        "rating": 3.5,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["books"]
    }
];
var reviews = [
    {
        "id": 0,
        "productId": 0,
        "timestamp": "2014-05-20T02:17:00+00:00",
        "user": "User 1",
        "rating": 5,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent..."
    },
    {
        "id": 1,
        "productId": 0,
        "timestamp": "2014-05-20T02:53:00+00:00",
        "user": "User 2",
        "rating": 3,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent... "
    }
];
