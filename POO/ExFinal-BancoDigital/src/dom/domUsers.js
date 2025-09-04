import { App } from "../App.js";
import { formUsers, userNameInput, emailInput, passwordInput, accountInput, balanceInput } from '../elements/elements.js';

const app = new App();

formUsers.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const userName = userNameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const account = accountInput.value;
    const balance = Number(balanceInput.value);

    app.createUser(userName, email, password, account, balance);

    console.log(`👤 Usuario ${userName} criado!`)
})