/* Crie uma aplicação javascript que simule um funcionamento básico de blog utilizando classes e associações.

Você deverá criar uma classe Post e uma classe Comment, onde uma instância de Post poderá receber vários comentários. As instâncias de Post também 
devem ter um método específico para adição de comentários nelas.

Você também deverá criar uma classe Author, e os objetos da classe Post também devem possuir um objeto da classe Author, que é o autor do post. 
Além disso, os objetos da classe Author também devem possuir um array de posts (objetos da classe Post) e um método específico para criação de 
posts, que deverá criar uma instância utilizando aquele próprio autor, incluir o post no array e então retornar o post criado. */

//Importando os arquivos
import { Comment } from './posts.js';
import { Author } from './authors.js';

//Definindo o autor do post
const author = new Author('Maycke');

/* Atravez da variavel author que definimos antes, conseguimos acessar todos os seus metodos criados dentro da class Author, por exemplo: */
const newPost = author.createPost('Usando classes', 'Classes são dificeis');

const comment1 = new Comment('Moises', 'Parabens!');
const comment2 = new Comment('Wellignton', 'Continue assim.');

newPost.addComments(comment1);
newPost.addComments(comment2);

console.log(author);
console.log(newPost);

/* --- COMO FUNCIONA? ---

+----------------+
|    Author      |
+----------------+
| name           |
| posts[]        |  <---- array de Post
+----------------+
| createPost()   |  --> cria e retorna Post já vinculado ao Author
+----------------+
        |
        | 1 autor cria vários posts
        v
+----------------+
|     Post       |
+----------------+
| title          |
| content        |
| author         |  <---- referência para um Author
| comments[]     |  <---- array de Comment
+----------------+
| addComment()   |  --> adiciona Comment no array
+----------------+
        |
        | 1 post pode ter vários comentários
        v
+----------------+
|    Comment     |
+----------------+
| content        |
| author         |  <-- aqui pode ser só o nome ou até um Author
+----------------+
*/