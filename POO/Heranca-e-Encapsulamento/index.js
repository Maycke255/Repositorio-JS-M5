/* Encapsulamento de classes e apenas uma forma de protejer as classes ela e de forma simples esconder os detalhes internos de uma classe e expor 
apenas o que for necessário para o uso dela */
//Vamos criar um metodo para representar o encapsulamento

class Login {
    //Definimos antes, a proprieade objeto que será oculta, usamos um # antes
    #password;

    constructor(login, password){
        this.login = login;
        //Logo então antes de criarmos o objeto, passamos # também antes
        this.#password = password;
    }

    //Metodo para apenas visualizar a senha, afinal a senha fica oculta, não conseguimos nem se quer visualizar ou alterar essa propriedade
    displayPassword(password){
        if (this.#password === password) {
            return this.#password
        }
    }

    changePassword(newPassword){
        
    }
}

//Mesmo se na instancia definimos o parametro, e realmente temos que definir, não conseguimos visualizar se exibirmos no console, então temos
//que criar um método para visualizar a senha
const newUser = new Login('Maycke', '123456');

console.log(newUser);
console.log(newUser.displayPassword('123456'));