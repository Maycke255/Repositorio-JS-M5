import { Operation } from "./Operarions.js";

export class Deposit extends Operation {
    constructor(date, value, userName){
        super(date, value);
        this.userName = userName;
    }
}