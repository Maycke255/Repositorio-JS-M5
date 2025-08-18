import { Review } from "./Review.js";

class Book {
    constructor(title, author, libraryName){
        this.title = title;
        this.author = author;
        this.libraryName = libraryName;
        this.reviews = []
    }

    addReview(name, review){
        const newReview = new Review(name, review)
        this.reviews.push(newReview);
    }
}

export { Book }