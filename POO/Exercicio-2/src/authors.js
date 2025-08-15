import { Post } from './posts.js'

class Author {
    constructor(author){
        this.author = author;
        this.posts = [];
    }

    createPost(title, content){
        const post = new Post(title, content, this);
        this.posts.push(post);
        return post;
    }
}

export { Author };