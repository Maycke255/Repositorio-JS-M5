/* Crie uma aplicação javascript que simule um funcionamento básico de blog utilizando classes e associações.

Você deverá criar uma classe Post e uma classe Comment, onde uma instância de Post poderá receber vários comentários. As instâncias de Post também 
devem ter um método específico para adição de comentários nelas.

Você também deverá criar uma classe Author, e os objetos da classe Post também devem possuir um objeto da classe Author, que é o autor do post. 
Além disso, os objetos da classe Author também devem possuir um array de posts (objetos da classe Post) e um método específico para criação de 
posts, que deverá criar uma instância utilizando aquele próprio autor, incluir o post no array e então retornar o post criado. */

class Comment {
    constructor(author, content){
        this.author = author;
        this.content = content;
    }
}

class Post {
    constructor(title, content, author) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.comments = [];
    }

    addComment(comment){
        this.comments.push(comment);
    }
}

class Author {
    constructor(name){
        this.name = name;
        this.posts = [];
    }

    addPosts(title, content){
        const post = new Post(title, content, this); //O proprio autor
        this.posts.push(post);
        return post;
    }
}

const author1 = new Author('Maycke')
const primaryPost = new author1.addPosts('Meu primeiro post', 'Usando classes');

const comment1 = new Comment('Maria', 'Parabens');
const comment2 = new Comment('Wellignton', 'Esta muito bom!')

primaryPost.addComment(comment1);
primaryPost.addComment(comment2);

console.log(author1);
console.log(primaryPost);