/* Métodos ou atributos estaticos são nada mais nada menos que metodos que podemos usar dentro da propria classe em si, são como se fosse um
objeto global que está ali para um próposito, seja ser usado por algum proposito dentro da própria classe, e um método que apenas existe
dentro da classe, Ex: */

//Aproveitar e usar o get e set junto
class Salario {
    #salario;

    constructor(nome, cargo){
        this.nome = nome;
        this.cargo = cargo;
        this.#salario = Salario.salarioBase; //Acessamos a propriedade atravez da propria classe, afinal, ela pertence a propria classe
    }

    //Definimos um salario padrão, podemos usar esse salario padrão, que por padrão irá ser esse valor
    //Usamos apenas a palavra reservada "static" para definirmos um atributo padrão
    static salarioBase = 1512;

    static bonificacaoDoMes = 200;

    get salarioDoGerente (){
        return `Salario atual: $R${this.#salario}.`;
    }

    //Podemos usar o get ou set junto com static:
    static get bonificacao () {
        return `Salario do mês com a bonificação: ${(Salario.salarioBase + Salario.bonificacaoDoMes)}`
    }

    set salarioDoGerente (aumento){
        if (isNaN(aumento) || aumento > 1000) {
            return console.error('Opção de aumento invalida');
        } else {
            return this.#salario += aumento;
        }
    }

}

//Acessando o get
const empregado = new Salario('Robson', 'Gerente');
console.log(empregado);
console.log(empregado.salarioDoGerente);

//Definindo o set
empregado.salarioDoGerente = 650;
console.log(empregado.salarioDoGerente);

//Para acessarmos propriedades estaticas, acessamos atravez da propria classe, elas não funcionam atravez de instancias, o codigo da undefined
console.log(Salario.bonificacao)