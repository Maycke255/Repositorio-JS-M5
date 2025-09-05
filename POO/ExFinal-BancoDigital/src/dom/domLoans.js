import { App } from "../App.js";
import { formLoan, dateLn, loanToday, userNameLoan, valueLoan, numberOfInstallments } from '../elements/elements.js'

const app = new App();

loanToday.addEventListener('click', (ev) => {
    ev.preventDefault();

    const today = new Date();

    const day = String(today.getDate()).padStart(2, "0");       // dia com 2 dígitos
    const month = String(today.getMonth() + 1).padStart(2, "0"); // meses começam do 0
    const year = today.getFullYear();

    dateLn.value = `${year}-${month}-${day}`;
});

formLoan.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const date = dateLn.value;
    const name = userNameLoan.value;
    const value = parseInt(valueLoan.value);
    const numberInstallments = parseInt(numberOfInstallments.value);

    app.takeOutALoan(date, value, name, numberInstallments);

    dateLn.value = '';
    userNameLoan.value = '';
    valueLoan.value = '';
    numberOfInstallments.value = '';
})