import { Installment } from "./Installment.js";
import { Operation } from "./Operarions.js";

export class Loan extends Operation {
    static #rates = 0.06; //Taxa de juros fixa (6%)

    constructor(date, value, name, installmentsCount){
        super(date, value);
        this.name = name;

        // 🔹 guarda o valor original sem juros
        this.originalValue = value;

        // calcula o valor total com juros
        this.totalValue = Number((value * (1 + Loan.#rates)).toFixed(2));

        // array com todas as parcelas
        this.installments = [];

        // Gera as parcelas já calculadas
        this.#generateInstallments(installmentsCount);
    }

    static get rates(){
        return Loan.#rates;
    }

    static set rates(newRates){
        Loan.#rates = newRates;
    }

    //Método privado para a geração de parcelas
    #generateInstallments(installmentsCount){
        // valor de cada parcela arredondado a 2 casas
        const installmentValue = this.totalValue / installmentsCount;

        for (let i = 1; i <= installmentsCount; i++) {
            this.installments.push(
                new Installment(Number(installmentValue.toFixed(2)), i)
            );
        }
    }
}