import { User } from "./entities/User.js";
import { Deposit } from "./entities/Deposit.js";
import { Base } from "../database/Base.js";

export class App {
    static #base = new Base();

    //Método para criar o usuario, usamos como base o método da classe User
    //Em seguida, acessamos a propria função, chamamos a nossa base de dados, e o metodo saveUser que e responsavel por salvar os usuarios
    createUser(name, email, password, account){
        const newUser = new User(name, email, password, account);
        App.#base.saveUser(newUser);
    }

    getUser(){
        return App.#base.find('users')
    }

    makeDeposit() {
        const date = new Date();
        return date;
        // const newDeposit = new Deposit()
    }
}

