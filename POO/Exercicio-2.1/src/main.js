import { Library } from "./Library.js";

const libraryName = new Library('Livraria Oliveira');
const newBook = libraryName.addBook('A volta dos que não foram', 'John Doe');

newBook.addReview('Maycke', 'Muito bom esse livro!');
newBook.addReview('Moises', 'biblioteca recheada.');

console.log(libraryName);
console.log(newBook);
