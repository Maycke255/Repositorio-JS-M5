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
/* Herança nada mais e quando uma classe herda os atributos e métodos de uma outra classe, analogia simples:
- Você tem uma classe mãe com os varios parametros e metodos que outras classes também podem herdar, exemplo, class Residencia(numero, bloco){}
- Você tem uma classe filha que pode herdar todos os parametros da mãe, como uma arvore genealogica, exemplo, class Casa(){} <- Vai herdar
da class residencia, e ela também pode ter seus metodos e parametros unicos. Como fazemos isso?  */

//Classe mãe onde vai ter varias outras subclasses
class Residencia {
    constructor(cidade, bloco){
        this.cidade = cidade;
        this.bloco = bloco;
    }
}

class Casinha extends Residencia{} //<- Se colocarmos assim normalmente sem passar nada,  classe ainda funciona, e nesse caso teriamos que passar
// as entradas dos metodos da classe mãe apenas */
//Passamos apenas os parametros da classe mãe
const casinha = new Casinha('Mirandopolis', '3-A');
console.log(casinha);

class Casa extends Residencia{
    //No caso se quisermos passar novos atributos, atributos proprios para a classe, precisamos passar também nos parametros os mesmos parametros
    //da classe mãe
    constructor(cidade, bloco, rua, numero){
        //E alem disso, precisamos também usar os a palavra reservada super e importar os parametros da classe mãe
        super(cidade, bloco);
        //Só apos ele passamos os parametros unicos da classe
        this.rua = rua;
        this.numero = numero;
    }
}

//Apos isso passamos os atributos da classe mãe e da classe filha
const casa = new Casa('Taiobeiras', 'Santos Cruzeiro', 'Pedra Azul', 397);
console.log(casa);

//E se quisermos herdar metodos? Temos duas formas
class Animal {
    constructor(animal){
        this.animal = animal;
    }

    fazerSom(){
        return `O ${this.animal} fez um som!!`;
    }
}

const meuGato = new Animal('gato');
console.log(meuGato);

class meuPet extends Animal{
    constructor(animal, nome){
        super(animal);
        this.nome = nome;
    }

    // //Metodo override, consiste em reescrever o método
    // fazerSom(){
    //     return `O ${this.animal} fez um som!!`
    // }

    //Metodo super usado em metodos, consiste também em usar o super e chamar o metodo da classe mãe, Ex:
    /* fazerSom(){
        super.fazerSom() <- Nesse caso estamos chamando o metodo da mãe, aproveitando apenas a lógica.
    } */

    //E se quisermos mudar o metodo e adicionar mais parametros?
    fazerSom(idade) { //Adicionamos um parametro a mais
        const som = super.fazerSom(); // chama a versão da mãe
        return `${som} O nome dela é ${this.nome} e ela tem ${idade} anos.` //E adicionamos mais conteudo
    }
}

const dogFezAu = new meuPet('cachorro', 'Shakira');
console.log(dogFezAu.fazerSom(5));
