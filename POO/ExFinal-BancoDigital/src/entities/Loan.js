import { Installment } from "./Installment.js";
import { Operation } from "./Operarions.js";

export class Loan extends Operation {
    static #rates = 1.78; //Taxa de juros fixa

    constructor(date, value, name, installmentsCount){
        super(date, value);
        this.name = name;
        this.installments = []; //Array para armazenar todos os emprestimos da pessoa
        this.#generateInstallments(installmentsCount) //Gera as parcelas já calculadas
    }

    static get rates(){
        return Loan.#rates;
    }

    static set rates(newRates){
        Loan.#rates = newRates;
    }

    //Método privado para a geração de parcelas
    #generateInstallments(installmentsCount){
        const totalWithInterest = this.value * (1 + Loan.#rates) / installmentsCount ; //Multiplica o valor do emprestimo com o valor da taxa mais 1. Ex:
        //valor do emprestimo 10000 * (1 + 0.05) = 10500
        //10500 / 12 meses = 875 a parcela

        for (let i = 1; i <= installmentsCount; i++) {
            this.installments.push(new Installment(totalWithInterest, i));
        }
    }
}