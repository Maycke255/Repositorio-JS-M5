//Arquivo para a class Author, para criarmos um post e adiciona-lo aos posts do proprio author

import { Post } from './posts.js'

class Author {
    //Posts com seu author
    constructor(author){
        this.author = author;
        this.posts = [];
    }

    //Metodo para criar um novo post, passamos um titulo, o conteudo e usamos o proprio author para aquele post, em seguida, upamos para o post
    //A class Post e apenas um molde que usamos para referenciar na criação dos posts, ambos o metodo createPost e a class Post tem os mesmos paramtros
    /* Então logo,Esse objeto post tem:
    Atributos: title, content, author, comments
    Métodos herdados da classe Post → no caso addComment.
    Quando o método createPost retorna post, você recebe esse objeto completo de volta. */
    createPost(title, content){
        const post = new Post(title, content, this);
        this.posts.push(post);
        return post;
    }
}

export { Author };