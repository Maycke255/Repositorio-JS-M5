export class Account {
    #data = {
        users: [],
        deposits: [],
        operations: [],
        loans: []
    }

    get data(){
        return this.#data;
    }

    constructor() {
        this.#loadFromStorage();
    }

    // 🔹 Carrega os dados salvos do localStorage
    #loadFromStorage() {
        const savedData = localStorage.getItem("bankData");
        if (savedData) {
        this.#data = JSON.parse(savedData);
        }
    }

    // 🔹 Salva os dados sempre que algo mudar
    #saveToStorage() {
        localStorage.setItem("bankData", JSON.stringify(this.#data));
    }

    getUserByName(name) {
        return this.#data.users.find((u) => u.name === name);
    }

    getLoansByName(name) {
        return this.#data.loans.find((l) => l.name === name);
    }

    saveUser(user){
        // user esperado: { name, email, password, saldo }
        //Esse método vai receber uma váriavel com as informações do usuario, como name, password, email e conta, então verificamos se o usuario já
        //existe, usamos o método find, para procurar dentro dos usuarios se tem algum usuario já com o email igual ao email da váriavel que foi
        //passada.
        const userExist = this.#data.users.find((u) => u.email === user.email);
        if (!userExist){
            this.#data.users.push(user);
            this.#saveToStorage();
        }
    }

    saveDeposit(deposit){
        this.#data.deposits.push(deposit);
        this.#saveToStorage();
    }

    saveTransfer(transfer){
        this.#data.operations.push(transfer);
        this.#saveToStorage();
    }

    saveLoan(loan){
        this.#data.loans.push(loan);
        this.#saveToStorage();
    }
}