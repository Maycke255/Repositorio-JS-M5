/* Crie um conjunto de classes em javascript para auxiliar na interação com o DOM.

Você deverá criar, no mínimo, 4 classes diferentes:
Uma classe para um elemento genérico do DOM (dica: utilize o nome Component, pois o nome Element poderá gerar conflitos 
com a implementação do navegador).Essa classe deverá possuir um atributo privado para armazenar a referência ao elemento 
do DOM e um método de acesso para ler o valor desse atributo.Ela também deve possuir um método build para criar o
elemento que deve ser chamado uma vez no construtor, mas também deve ser possível chamá-lo novamente através da 
instância.Ela também deve possuir um método render para adicionar o elemento na página que poderá ser chamado pela 
instância a qualquer momento.

Essa classe deverá possuir um atributo privado para armazenar a referência ao elemento do DOM e um método de acesso 
para ler o valor desse atributo.

Ela também deve possuir um método build para criar o elemento que deve ser chamado uma vez no construtor, mas também 
deve ser possível chamá-lo novamente através da instância.

Ela também deve possuir um método render para adicionar o elemento na página que poderá ser chamado pela instância a 
qualquer momento.

Uma classe específica para elementos input, que deve ser uma subclasse da classe Component.

Uma classe específica para elementos label, que deve ser uma subclasse da classe Component e no seu construtor deve 
ser possível indicar como primeiro parâmetro qual será o seu conteúdo em texto.

Uma classe específica para elementos form, que deve ser uma subclasse da classe Component e possuir um método para 
adicionar elementos como filhos (através das instâncias das classes Component e suas subclasses). */

class Component {

    #type;

    constructor(type, id, classe){
        this.#type = type;
        this.id = id;
        this.classe = classe;
    }
    
    build(){
        const input = document.createElement('input');

        input.type = this.#type;
        input.id = this.id;
        input.class = this.classe;
        return input;
    }

    render(container){
        const main = document.getElementById(container);

        const input = this.build();
        main.appendChild(input);
    }

    displayComponent(){
        if (this.#type) {
            return `${this.#type} e ${this.id}`
        }
    }
}


const componet1 = new Component('text', 'name', 'name-input');
componet1.render('main');
console.log(componet1.displayComponent())