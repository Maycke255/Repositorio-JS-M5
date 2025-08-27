import { App } from "./App.js";

const app = new App();

app.createAuthor('H.P. Lovecraft', 'Rhode Island', '...');
app.createAuthor('Ito Junji', 'Japão', '...');

const authors = app.getAuthors();

app.createBook('O chamado de Cthulhu', '...', 19.90, 60, '...', 'Terror/Ficção Cíentifica', 300, authors[0]);
app.createBook('Azatoth', '...', 24.50, 50, '...', 'Terror/Ficção Cíentifica', 230, authors[0]);
app.createBook('Tomie', '...', 30.00, 40, '...', 'Terror/Psicologico/Mangá/Páginas coloridas', 130, authors[1]);

const books = app.getBooks();

app.createUser('Maycke', 'may@gmail.com', '123456');

const users = app.getUsers();

app.showDatabase();

const items = [
    {
        product: books[0],
        quantity: 1
    },
    {
        product: books[1],
        quantity: 2
    },
    {
        product: books[2],
        quantity:1
    }
];

app.createOrder(items, users[0]);
app.showDatabase();

const orders = app.getOders();
console.log("Pedido inteiro:", orders[0]);         // instância de Order
console.log("Getter data:", orders[0].data);       // objeto com { user, items, total }
console.log("Items:", orders[0].data.items);       // array de itens