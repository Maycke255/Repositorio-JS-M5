import { Operation } from "./Operarions.js";
import { User } from './User.js';

export class Deposit extends Operation {
    constructor(date, value){
        super(date, value);
    }

    depositMade(){
        console.log(`Deposito realizado na conta de ${User}`);
    }
}