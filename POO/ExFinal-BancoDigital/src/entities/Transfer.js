import { Operation } from "./Operarions.js";

export class Transfer extends Operation {
    constructor(date, value, sender, recipient){
        super(date, value);
        this.sender = sender;
        this.recipient = recipient;
    }
}