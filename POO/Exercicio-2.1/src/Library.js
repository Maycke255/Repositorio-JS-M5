import { Book } from "./Book.js";

class Library{
    constructor(libraryName){
        this.libraryName = libraryName;
        this.books = [];
    }

    addBook(title, author){
        const newBook = new Book(title, author, this);
        this.books.push(newBook);
        return newBook;
    }
}

export { Library }