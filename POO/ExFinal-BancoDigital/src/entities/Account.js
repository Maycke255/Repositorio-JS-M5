export class Account {
    #data = {
        users: [],
        deposits: [],
        operations: [],
        loans: []
    }

    find (key){
        return this.#data[key];
    }

    movementHistory(){
        return this.#data.operations;
    }

    loanHistory(){
        return this.#data.loans;
    }

    saveUser(user){
        // user esperado: { name, email, password, saldo }
        //Esse método vai receber uma váriavel com as informações do usuario, como name, password, email e conta, então verificamos se o usuario já
        //existe, usamos o método find, para procurar dentro dos usuarios se tem algum usuario já com o email igual ao email da váriavel que foi
        //passada.
        const userExist = this.#data.users.find((u) => u.email === user.email);
        if (!userExist){
            this.#data.users.push(user);
        }
    }

    getUserByName(name) {
        return this.#data.users.find((u) => u.name === name);
    }

    saveDeposit(deposit){
        this.#data.deposits.push(deposit);
    }

    saveTransfer(transfer){
        this.#data.operations.push(transfer);
    }

    getLoansByName(name) {
        return this.#data.loans.find((l) => l.name === name);
    }

    saveLoan(loan){
        this.#data.loans.push(loan);
    }

    returnLoans(){
        return this.#data.loans;
    }
}