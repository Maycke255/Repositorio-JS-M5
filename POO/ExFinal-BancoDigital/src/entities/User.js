export class User {
    #password;
    #account;

    constructor(name, email, password, account){
        this.name = name;
        this.email = email;
        this.#password = password;
        this.#account = account;
    }
}