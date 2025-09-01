import { User } from "./entities/User.js";
import { Deposit } from "./entities/Deposit.js";
import { Transfer } from "./entities/Transfer.js";
import { Account } from "./entities/Account.js";

export class App {
    static #base = new Account();

    //Método para criar o usuario, usamos como base o método da classe User
    //Em seguida, acessamos a propria função, chamamos a nossa base de dados, e o metodo saveUser que e responsavel por salvar os usuarios
    createUser(name, email, password, account){
        const newUser = new User(name, email, password, account);
        App.#base.saveUser(newUser);
    }

    getUser(){
        return App.#base.find('users')
    }

    //Método de deposito, depositando na conta do usuario com a data e o valor digitado, em seguida salvamos na array e adicionamos o valor ao saldo
    makeDeposit(date, value) {
        const date = new Date();
        const newDeposit = new Deposit({ date, value} );
        App.#base.saveDeposit(newDeposit);
        App.#base.displayValue(value);
    }

    makeTransfer(date, value, sender, recipient){
        const newTransfer = new Transfer({ date, value, sender, recipient });
        App.#base.saveTransfer(newTransfer);
        const whoTransferred = App.#base.
        App.#base.displayValue(value);
    }
}

