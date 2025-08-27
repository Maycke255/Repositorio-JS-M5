import { Product } from "./Product.js";

export class Poster extends Product {
    constructor(name, description, price, inStock = 0, height, width){
        super(name, description, price, inStock);
        this.height = height;
        this.width = width;
    }
}