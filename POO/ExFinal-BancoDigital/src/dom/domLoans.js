import { App } from "../App.js";
import { formLoan, dateLn, loanToday, userNameLoan, valueLoan, numberOfInstallments, newRates } from '../elements/elements.js';
import { Loan } from "../entities/Loan.js"; // precisa importar Loan

const app = new App();

loanToday.addEventListener('click', (ev) => {
    ev.preventDefault();

    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    dateLn.value = `${year}-${month}-${day}`;
});

formLoan.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const date = dateLn.value;
    const name = userNameLoan.value;
    const value = parseInt(valueLoan.value);
    const numberInstallments = parseInt(numberOfInstallments.value);

    // Atualiza taxa de juros se o input tiver valor
    if (newRates.value.trim() !== "") {
        const rate = parseFloat(newRates.value) / 100; // converte de % para decimal
        Loan.rates = rate;
        console.log(`➡️ Nova taxa de juros definida: ${Loan.rates * 100}%`);
    }

    app.takeOutALoan(date, value, name, numberInstallments);

    // limpa os inputs
    dateLn.value = '';
    userNameLoan.value = '';
    valueLoan.value = '';
    numberOfInstallments.value = '';
    newRates.value = '';
});
