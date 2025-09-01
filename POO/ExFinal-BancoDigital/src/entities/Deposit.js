import { Operation } from "./Operarions.js";

export class Deposit extends Operation {
    constructor(date, value){
        super(date, value);
    }

    //Mudar isso com a biblioteca dayjs
    operationCarriedOut(user){
        console.log(`Deposito realizado na propria conta de ${user}, no valor de ${this.value} na data de ${this.date}.`);
    }
}