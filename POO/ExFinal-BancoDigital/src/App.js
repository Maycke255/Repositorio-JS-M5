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
    makeDeposit(date, value, userName) {
        const newDeposit = new Deposit({ date, value, userName });
        App.#base.saveDeposit(newDeposit);

        const user = App.#base.getUserByName(userName);
        if (user) {
            user.saldo += value;
            console.log(`Depósito de R$${value} feito na conta de ${user.name}`);
        }
    }

    makeTransfer(date, value, senderName, recipientName){
    const newTransfer = new Transfer({ date, value, senderName, recipientName });
    App.#base.saveTransfer(newTransfer);

    // procurar os usuários no Account
    const sender = App.#base.getUserByName(senderName);
    const recipient = App.#base.getUserByName(recipientName);

    if (!sender || !recipient) {
        console.log("Usuário não encontrado!");
        return;
    }

    // descontar do sender
    if (sender.saldo >= value) {
        sender.saldo -= value;
        recipient.saldo += value;
        console.log(`Transferência de R$${value} feita de ${sender.name} para ${recipient.name}`);
    } else {
        console.log("Saldo insuficiente!");
    }
}

}

