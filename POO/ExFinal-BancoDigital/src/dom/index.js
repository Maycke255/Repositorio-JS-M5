import { App } from "../App.js";
import { getDeposists, getUsers, getTransfers, getLoans, clearData } from '../elements/elements.js';

const app = new App();

getDeposists.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(app.displayDeposits());
});

getUsers.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(app.displayUsers());
})

getTransfers.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(app.displayOperations())
});

getLoans.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(app.displayLoan());
});

clearData.addEventListener('click', (event) => {
    event.preventDefault(); 

    app.clearDatabase()
    console.log('Database apagada.')
})