import { Database } from "../database/Database.js";
import { Author } from "./entities/Author.js";
import { Book } from "./entities/Book.js";
import { Order } from "./entities/Order.js";
import { Poster } from "./entities/Poster.js";
import { User } from "./entities/User.js";

export class App {
    //Chamamos aqui a classe database
    static #database = new Database();

    //Método para criar um usuario
    createUser(name, email, password){
        const user = new User(name, email, password);
        App.#database.saveUser(user);
    }

    //Exibir os usuarios da base
    getUsers(){
        return App.#database.find('users');
    }

    //Salvar um autor
    createAuthor(name, nacionality, bio){
        const author = new Author(name, nacionality, bio);
        App.#database.saveAuthor(author);
    }

    getAuthors(){
        return App.#database.find('authors');
    }

    //Criar um livro
    createBook(title, description, price, inStock, synopsis, genre, pages, author){
        const newBook = new Book(title, description, price, inStock, synopsis, genre, pages, author);
        App.#database.saveBook(newBook);
    }

    //Adicionar o livro ao estoque
    addBook(bookName, quantity){
        App.#database.addBooksToStock(bookName, quantity);
    }

    //Obter a lista de livros
    getBooks(){
        return App.#database.find('books');
    }

    //Criar um poster
    createPosters(name, description, price, inStock, height, width){
        const newPoster = new Poster(name, description, price, inStock, height, width);
        App.#database.savePoster(newPoster);
    }

    addPoster(posterName, quantity){
        return App.#database.addPostersToStock(posterName, quantity);
    }

    //Obter a lista de posters
    getPosters(){
        return App.#database.find('posters');
    }

    createOrder(item, user){
        const newOrder = new Order(item, user);
        App.#database.saveOrder(newOrder);
        newOrder.data.items.forEach(({ product, quantity }) => {
            if (product instanceof Book) {
                App.#database.removeBooksToStock(product.name, quantity);
            } else if (product instanceof Poster) {
                App.#database.removePostersToStock(product.name, quantity);
            }
        });
    }

    getOders(){
        return App.#database.find('orders');
    }

    showDatabase() {
        App.#database.showStorage();
    }
}