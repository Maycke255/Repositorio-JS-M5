import { App } from "./App.js";

const app = new App();

app.createUser('Maycke', 'may@gmail.com', '123456', '98745-0');
const getUser = app.getUser()

console.log(getUser)