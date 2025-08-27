export class Database {
    /* Similação de um banco de dados:
    Aqui temos 5 “tabelas”: autores, livros, pôsteres, pedidos e usuários.
    Tudo fica guardado dentro desse objeto privado #storage.

    find(key) → devolve uma das listas (authors, books, etc).

    saveAuthor, saveBook, savePoster, saveUser, saveOrder → funções que inserem dados nessas listas, mas com uma checagem pra não salvar 
    duplicado (exceto pedidos, que podem se repetir).

    findBookByName, findPosterByName → busca específico por nome.

    addBooksToStock / removeBooksFromStock → manipulam o estoque de livros.

    addPostersToStock / removePostersFromStock → manipulam estoque de pôsteres.

    showStorage() → imprime tudo na tela em forma de tabela.*/

    #storage = {
        authors: [],
        users: [],
        books: [],
        posters: [],
        orders: []
    }

    //Retorna a lista inteira de algum objeto presente no storage
    find(key){
        return this.#storage[key];
    }

    //Salvar nome do autor
    saveAuthor(name){
        this.#storage.authors.push(name);
    }

    //Método de busca separado para buscar o livro pelo nome
    findBookByName(bookName){
        return this.#storage.books.find((b) => b.name === bookName);
    }

    //Salvar um livro
    saveBook (book) {
        const bookExists = this.findBookByName(book.name);//Chama o método de busca para verificar se o livro já existe
        if (!bookExists) { //Caso o livro NÃO EXISTA, adiciona
            this.#storage.books.push(book);
        }
    }

    //Aumenta a quantidade de livros
    addBooksToStock(bookName, quantity){
        const book = this.findBookByName(bookName);
        book?.addToStock(quantity); //Chamamos o método addToStock, mas o método so e executado se realmente existir um book
    }

    //Mesma coisa do anterior, mas dessa vez remove
    removeBooksToStock(bookName, quantity){
        const book = this.findBookByName(bookName);
        book?.removeToStock(quantity);
    }
    
    //===== POSTERS =====//
    //Método de busca separado para buscar o poster pelo nome
    findPosterByName(posterName){
        return this.#storage.posters.find((p) => p.name === posterName);
    }

    //Salvar um poster
    savePoster (poster) {
        const posterExist = this.findPosterByName(poster.name);//Chama o método de busca para verificar se o poster já existe
        if (!posterExist) { //Caso o poster NÃO EXISTA, adiciona
            this.#storage.posters.push(poster);
        }
    }

    //Aumenta a quantidade de posters
    addPostersToStock(posterName, quantity){
        const poster = this.findPosterByName(posterName);
        poster?.addToStock(quantity); //Chamamos o método addToStock, mas o método so e executado se realmente existir um poster
    }

    //Mesma coisa do anterior, mas dessa vez remove
    removePostersToStock(posterName, quantity){
        const poster = this.findPosterByName(posterName);
        poster?.removeToStock(quantity);
    }

    //===== USER =====//
    saveUser (user) {
        const userExist = this.#storage.users.find((u) => u.email === user.email);
        if (!userExist) { //Caso o usuario NÃO EXISTA, adiciona
            this.#storage.users.push(user);
        }
    }

    //===== ORDER =====//
    saveOrder(order){
        this.#storage.orders.push(order);
    }

    showStorage(){
        console.table(this.#storage.authors);
        console.table(this.#storage.books);
        console.table(this.#storage.posters);
        console.table(this.#storage.users);
        // console.log(this.#storage.orders[0].data); // deve mostrar o array
        console.table(this.#storage.orders.map(order => order.data)); //Exibe o metodo get data
    }
}