import { App } from "../App.js";
import { transferForm, dateTsf, transferToday, nameSenderAccountTsf, valueTsf, nameRecipientAccountTsf } from '../elements/elements.js';

const app = new App();

transferToday.addEventListener('click', (ev) => {
    ev.preventDefault();

    const today = new Date();

    const day = String(today.getDate()).padStart(2, "0");       // dia com 2 dígitos
    const month = String(today.getMonth() + 1).padStart(2, "0"); // meses começam do 0
    const year = today.getFullYear();

    dateTsf.value = `${year}-${month}-${day}`;
})

transferForm.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const date = dateTsf.value;
    const nameSender = nameSenderAccountTsf.value;
    const value = parseInt(valueTsf.value);
    const nameRecipient = nameRecipientAccountTsf.value;

    app.makeTransfer(date, value, nameSender, nameRecipient);
    console.log(`Transfêrencia de ${value} realizada em ${date}, de ${nameSender} para ${nameRecipient}.`)
});