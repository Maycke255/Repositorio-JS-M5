import { App } from "../App.js";
import { formDeposits, dateDpt, nameAccountDpt, valueDpt  } from '../elements/elements.js'

const today = new Date();

const day = String(today.getDate()).padStart(2, "0");       // dia com 2 dígitos
const month = String(today.getMonth() + 1).padStart(2, "0"); // meses começam do 0
const year = today.getFullYear();

dateDpt.value = `${year}-${month}-${day}`;

const app = new App();

formDeposits.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const date = dateDpt.value;
    const name = parseInt(nameAccountDpt.value);
    const value = valueDpt.value;

    app.makeDeposit(date, value, name);
})