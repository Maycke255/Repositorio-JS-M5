//Página principal
const getDeposists = document.getElementById('getDeposits');
const getUsers = document.getElementById('getUsers');
const getTransfers = document.getElementById('getTransfers');
const getLoans = document.getElementById('getLoans');
const clearData = document.getElementById('clearData');

export { getDeposists, getUsers, getTransfers, getLoans, clearData }

//Usuarios
const formUsers = document.getElementById('formUsers');
const userNameInput = document.getElementById('userName');
const emailInput = document.getElementById('emailUser');
const passwordInput = document.getElementById('passwordUser');
const accountInput = document.getElementById('accountUser');
const balanceInput = document.getElementById('balanceUser');

export { formUsers, userNameInput, emailInput, passwordInput, accountInput, balanceInput }

//Transferencias
const transferForm = document.getElementById('transferForm');
const dateTsf = document.getElementById('dateTsf');
const transferToday = document.getElementById('transferToday');
const nameSenderAccountTsf = document.getElementById('nameSenderAccountTsf');
const valueTsf = document.getElementById('valueTsf');
const nameRecipientAccountTsf = document.getElementById('nameRecipientAccountTsf');

export { transferForm, dateTsf, transferToday, nameSenderAccountTsf, valueTsf, nameRecipientAccountTsf }

//Deposito
const formDeposits = document.getElementById('formDeposits');
const dateDpt = document.getElementById('dateDpt');
const nameAccountDpt = document.getElementById('nameAccountDpt');
const valueDpt = document.getElementById('valueDpt');

export { formDeposits, dateDpt, nameAccountDpt, valueDpt }

//Emprestimos
const formLoan = document.getElementById('formLoan');
const dateLn = document.getElementById('dateLn');
const loanToday = document.getElementById('loanToday');
const userNameLoan = document.getElementById('userNameLoan');
const valueLoan = document.getElementById('valueLoan');
const numberOfInstallments = document.getElementById('numberOfInstallments');

export { formLoan, dateLn, loanToday, userNameLoan, valueLoan, numberOfInstallments }