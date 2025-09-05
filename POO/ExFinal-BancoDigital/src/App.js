import { User } from "./entities/User.js";
import { Deposit } from "./entities/Deposit.js";
import { Transfer } from "./entities/Transfer.js";
import { Account } from "./entities/Account.js";
import { Loan } from "./entities/Loan.js";
import { Installment } from './entities/Installment.js'

export class App {
    static #base = new Account();

    //Método para criar o usuario, usamos como base o método da classe User
    //Em seguida, acessamos a propria função, chamamos a nossa base de dados, e o metodo saveUser que e responsavel por salvar os usuarios
    createUser(name, email, password, account, balance){
        const newUser = new User(name, email, password, account, balance);
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
            user.balance += value;
            App.#base.updateUser(user);

            console.log(`Depósito de R$${value} feito na conta de ${user.name}`);
        }
    }

    //Método de transferencia
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
        if (sender.balance >= value) {
            sender.balance -= value;
            recipient.balance += value;
            console.log(`Transferência de R$${value} feita de ${sender.name} para ${recipient.name}`);

            App.#base.updateUser(sender);
            App.#base.updateUser(recipient);
        } else {
            console.log("Saldo insuficiente!");
        }
    }

    //Espera receber algo como: date: 02/09/2025, 10000, 12
    //Empréstimo
    takeOutALoan(date, value, name, installmentsCount){
        const existingLoans = App.#base.getLoansByName(name);

        if (existingLoans.length >= 5) {
            console.log("Você não pode fazer novos empréstimos até quitar alguns existentes.");
            return;
        }

        //  cria o empréstimo já com valor bruto, total e parcelas
        const loan = new Loan(date, value, name, installmentsCount);

        //  adiciona o valor bruto na conta do usuário
        const addLoanAccount = App.#base.getUserByName(name);
        addLoanAccount.balance += value;

        //  salva no banco (LocalStorage)
        App.#base.saveLoan(loan);

        console.log(
            `Empréstimo de R$${loan.originalValue} criado para ${loan.name}.
            Total a pagar (com juros): R$${loan.totalValue}.
            Parcelas:`, loan.installments
        );
}

    //Exibição:
    find (key){
        return App.#base.data[key];
    }

    displayDeposits(){
        return App.#base.data.deposits;
    }

    displayOperations(){
        return App.#base.data.operations;
    }

    displayLoan(){
        return App.#base.data.loans;
    }

    displayUsers(){
        return App.#base.data.users;
    }

    clearDatabase(){
        App.#base.clearData();
    }
}