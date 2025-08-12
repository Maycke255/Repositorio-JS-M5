/* um atributo fullname, atribuível na instanciação
um atributo email, atribuível na instanciação
um atributo password, atribuível na instanciação
um método login, que tem como parâmetros um email e uma senha e deve comparar esses parâmetros com o email e a senha do usuário e mostrar uma 
mensagem no console dizendo se o login foi bem sucedido ou não */

alert('Bem vindo à página de login!');
let menu;
let logins = [];

do {
    const registrations = logins.map((user, i) => {
            return `
                            ${i + 1}. Nome: ${user.fullName}
                            E-mail: ${user.email}`;
    });

    const registersCompleted = registrations.length === 0
        ? 'Nenhum usuário cadastrado'
        : 'Logins cadastrados:\n' + registrations.join('\n\n');
        
        console.log(logins)
    menu = parseFloat(prompt(`Por favor, escolha uma opção de acordo com seu número.
                            ${registersCompleted}
                            1. Cadastrar login.
                            2. Efetuar login.
                            3. Sair.`));

    switch (menu) {
        case 1:
            const fullName = prompt('Por favor, insira seu nome completo.');

            if (fullName.length === 0) {
                alert('Por favor, insira um nome.');
                break; //Já usamos o break aqui para encerrar apenas o switch, não o loop todo
            }

            const email = prompt('Por favor, insira um e-mail');
            if (email.length === 0) {
                alert('Por favor, insira um e-mail');
                break;
            }

            const password = prompt('Digite sua senha.');
            if (password.length === 0) {
                alert('Por favor, insira uma senha.');
                break;
            }

            function User (fullName, email, password) {
                this.fullName = fullName;
                this.email = email;
                this.password = password;
            }

            const newUser = new User(fullName, email, password);
            logins.push(newUser);
            break;
        
        case 2:
            if (logins.length === 0) {
                alert('Você não tem logins cadastrados no momento, cadastre alguns antes.');
                break;
            }

            const listAcess = parseFloat(prompt(`Selecione qual e o login que deseja efetuar pelo seu número:
                ${registersCompleted}`)) - 1;

            if (isNaN(listAcess) || listAcess < 0 || listAcess >= logins.length) {
                alert('Selecione uma opção valida.');
                break;
            }

            let element = logins[listAcess];

            const enterEmail = prompt(`Efetue login com o email do usuario ${element.fullName}.`);
            const enterPassword = prompt(`Digite a senha do usuario ${element.fullName}`);

            if (enterEmail !== element.email || enterPassword !== element.password) {
                alert('Email ou senha incorretos, por favor tente novamente.');
                break;
            } else {
                alert('Login bem sucedido!')
            }
            console.log(element);
        
            break;

        case 3:
            alert('Finalizando o programa.')
            break;

        default:
            alert('Opção inválida, selecione uma opção entre 1 e 3.');
            break;
    }

} while (menu !== 3);
