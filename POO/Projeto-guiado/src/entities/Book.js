import { Product } from "./Product.js";

export class Book extends Product {
    constructor(title, description, price, inStock = 0, synopsis, genre, pages, author){
        super(`Livro: ${title}`, description, price, inStock);
        this.title = title;
        this.synopsis = synopsis;
        this.genre = genre;
        this.pages = pages;
        this.author = author;
    }
}