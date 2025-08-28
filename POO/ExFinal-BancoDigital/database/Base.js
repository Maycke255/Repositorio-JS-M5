export class Base {
    #data = {
        user: [],
        operations: [],
        loans: []
    }
    
    find (key){;
        return this.#data[key]
    }

    saveUser(user){
        this.#data.user.push(user);
    }
}