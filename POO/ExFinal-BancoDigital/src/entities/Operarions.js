export class Operation {
    #value;

    constructor(date, value){
        this.date = date;
        this.#value = value;
    }

    get value (){
        return this.#value;
    }

    set value (newValue){
        return newValue = this.#value;
    }
}