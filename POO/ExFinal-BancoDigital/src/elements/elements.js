//Página principal
const getDeposists = document.getElementById('getDeposits');
const getUsers = document.getElementById('getUsers');
const getTransfers = document.getElementById('getTransfers');
const getLoans = document.getElementById('getLoans');

export { getDeposists, getUsers, getTransfers, getLoans }

//Usuarios
const formUsers = document.getElementById('formUsers');
const userName = document.getElementById('userName').value;
const email = document.getElementById('emailUser').value;
const password = document.getElementById('passwordUser').value;
const account = document.getElementById('accountUser').value;
const balance = document.getElementById('balanceUser').value;

export { formUsers, userName, email, password, account, balance }

//Transferencias
const transferForm = document.getElementById('transferForm');
const dateTsf = document.getElementById('dateTsf').value;
const transferToday = document.getElementById('transferToday');
const nameSenderAccountTsf = document.getElementById('nameSenderAccountTsf').value;
const valueTsf = document.getElementById('valueTsf').value;
const nameRecipientAccountTsf = document.getElementById('nameRecipientAccountTsf').value;

export { transferForm, dateTsf, transferToday, nameSenderAccountTsf, valueTsf, nameRecipientAccountTsf }

//Deposito
const formDeposits = document.getElementById('formDeposits');
const dateDpt = document.getElementById('dateDpt').value;
const nameAccountDpt = document.getElementById('nameAccountDpt').value;
const valueDpt = document.getElementById('valueDpt').value;

export { formDeposits, dateDpt, nameAccountDpt, valueDpt }

//Emprestimos
const formLoan = document.getElementById('formLoan');
const dateLn = document.getElementById('dateLn').value;
const loanToday = document.getElementById('loanToday');
const userNameLoan = document.getElementById('userNameLoan').value;
const valueLoan = document.getElementById('valueLoan').value;
const numberOfInstallments = document.getElementById('numberOfInstallments').value;

export { formLoan, dateLn, loanToday, userNameLoan, valueLoan, numberOfInstallments }