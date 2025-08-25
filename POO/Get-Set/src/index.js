/* Os métodos get e set, que são mais conhecidos como getter e setter, permitem que você controle como uma propriedade é lida (get) ou 
modificada (set), em vez de acessá-la diretamente. */

class Character {
    #money;
    constructor(name, idade, money){
        this.name = name;
        this.idade = idade;
        this.#money = money;
    }
    /* get - Obter/Ler
    Define uma função que será chamada quando alguém acessar a propriedade.
    Parece uma propriedade comum, mas por trás é um método, Atributo get para ler a propriedade, não podemos passar nenhum parametro nem nada, 
    podemos modificar também. Ex: */
    get money () {
        return `Valor na carteira: R$${this.#money}.`;
    }

    /* set - Setar/Definir
    Define uma função que será chamada quando alguém atribuir um valor à propriedade.
    Não precisam ser o mesmo nome da propriedade privada, mas ambos tem que ter nomes intuitivos e parecidso
    Útil para validar ou transformar dados antes de salvar. Ambos precisam ter o mesmo nome, tanto o set e o get. Ex:  */
    set money (newMoney){
        if (typeof newMoney === 'number') {
            this.#money += newMoney;
        } else {
            console.log('Valor invalido!')
        }
    }
}

const newCharacter = new Character('Maycke', 21, 1500);
console.log(newCharacter.money);

newCharacter.money = 200;
console.log(newCharacter.money);
