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
        } else {
            return 'Senha icorreta';
        }
    }

    //Podemos também alterar essa propriedade privada somente atravez de um metodo da propria classe, fora disso, não e possivel alterar
    changePassword(newPassword){
        return this.#password = newPassword
    }
}

//Mesmo se na instancia definimos o parametro, e realmente temos que definir, não conseguimos visualizar se exibirmos no console, então temos
//que criar um método para visualizar a senha
const newUser = new Login('maycke@gmail.com', 123456);
//Exibe apenas o nome que e um objeto publico, a senha nem se quer aparece
console.log(newUser);

//Exibindo a senha
console.log(newUser.displayPassword(123456));

//Alteração da senha atravez do metodo
console.log(newUser.changePassword(101010));

//Colocando a mesma senha de proposito, vai dar erro
console.log(newUser.displayPassword(123456));


// =================  HERANÇA ================= //
