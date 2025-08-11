/* um atributo fullname, atribuível na instanciação
um atributo email, atribuível na instanciação
um atributo password, atribuível na instanciação
um método login, que tem como parâmetros um email e uma senha e deve comparar esses parâmetros com o email e a senha do usuário e mostrar uma 
mensagem no console dizendo se o login foi bem sucedido ou não */

alert('Bem vindo a pagina de login!');
let menu;
let logins = [];

do {
    const registrations = logins.forEach((user) => {
        let list = 'Logins cadastrados:\n'
        list += `Nome: ${user.fullName}
                E-mail: ${user.email}
                Senha: ${user.password}`
    });
    const registersCompleted = registrations.length === 0 ? 'Nenhum usuario cadastrado' : registrations; 

    menu = prompt(parseFloat(`Por favor, escolha uma opção de acordo com seu número.
                            ${registersCompleted}
                            1. Cadastrar login.
                            2. Efetuar login.
                            3. Sair.`));

    switch (menu) {
        case 1:
            const fullName = prompt('Por favor, insira seu nome completo.');

            if (fullName.length === 0) {
                alert('Por favor, insira um nome.');
            return;
            }

            const email = prompt('Por favor, insira um e-mail');
            if (email.length === 0) {
                alert('Por favor, insira um e-mail');
                return;
            }

            const password = prompt('Digite sua senha.');
            if (password.length === 0) {
                alert('Por favor, insira uma senha.');
                return;
            }

            function User (user, ) {
                
            }
            break;
        
        case 2:
            break;

        case 3:
            break;

        default:
            alert('Opção invalida, selecione uma opção entre 1 e 3.')
            break;
    }

} while (menu !== 3);