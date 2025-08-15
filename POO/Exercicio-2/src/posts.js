/* Nesse arquivo vamos criar a class post e comment */

class Comment {
    constructor(name, comment){
        this.name = name;
        this.comment = comment;
    }
}

class Post {
    constructor(title, content, author){
        this.title = title;
        this.content = content;
        this.author = author;
        this.comments = [];
    }

    addComments(comment){
        this.comments.push(comment)
    }
}

export { Post, Comment }