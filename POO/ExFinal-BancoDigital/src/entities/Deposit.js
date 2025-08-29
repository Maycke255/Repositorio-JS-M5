import { Operation } from "./Operarions.js";

export class Deposit extends Operation {
    constructor(date, value){
        super(date, value);
    }

    depositMade(){
        console.log(`Deposito realizado na sua propria conta.`);
    }
}