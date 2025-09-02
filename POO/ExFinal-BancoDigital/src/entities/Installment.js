export class Installment {
    constructor(value, number) {
        this.value = value;   // valor da parcela
        this.number = number; // número da parcela (1, 2, 3...)
        this.paid = false;    // começa como "não paga"
    }

    pay() {
        if (this.paid) {
            console.log(`Parcela ${this.number} já está paga.`);
        } else {
            this.paid = true;
            console.log(`Parcela ${this.number} no valor de R$${this.value} foi paga.`);
        }
    }
}