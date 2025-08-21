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
        input.className = this.classe;
        return input;
    }

    get type(){
        return this.#type;
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

class Input extends Component {
    constructor(type, id, classe, value){
        super(type, id, classe)
        this.value = value;
    }

    build(){
        const input = document.createElement('input')

        input.type = this.type;
        input.id = this.id;
        input.className = this.classe;
        input.value = this.value;
        return input;
    }

    render(container){
        const render = super.render(container);
        return render;
    }
}

class Label extends Component {
    constructor(id, classe, text, forLabel){
        super(null, id, classe);
        this.text = text;
        this.for = forLabel;
    }

    build(){
        const label = document.createElement('label');

        label.innerText = this.text;
        label.htmlFor = this.for;
        label.id = this.id;
        label.className = this.classe;
        return label;
    }
    
    render(container){
        const render = super.render(container);
        return render;
    }
}

class Form extends Component{
    constructor(id, classe){
        super(null, id, classe);
        this.children = [] // <- Componentes do form, como label inputs, etc
    }

    build(){
        const form = document.createElement('form');

        form.id = this.id;
        form.className = this.classe;

        this.children.forEach((child) => {
            form.appendChild(child.build()); //Chamando o metodo build para criar o elemento html
        });

        return form;
    }

    addChild(component){
        this.children.push(component);
    }

    /* O que a função addChiçd e build fazem nesse caso?
    addChild(child) 👉 apenas adiciona a instância (objeto) no array this.children.
    Ou seja, guarda o objeto JS (Input, Label, Form, etc).
    this.children.forEach(child => { form.appendChild(child.build()) }) 👉 percorre cada objeto armazenado e chama o .build() de cada um, que
    devolve o elemento HTML real, e então adiciona no <form>. */
    render(container){
        const main = document.getElementById(container);

        const form = this.build();
        main.appendChild(form);
        return form;
    }
}

const formTest = new Form('form1', 'form-class');

const label1 = new Label('nameLabel', 'name-label', 'Nome: ', 'name-input');
// label1.render('main');
console.log(label1);

const component1 = new Component('text', 'name', 'name-input');
// componet1.render('main');
console.log(component1.displayComponent());
console.log(component1)

const inputOk = new Input('submit', 'submitBtn','submit-btn', 'ENVIAR');
const inputCancel = new Input('button', 'cancelBtn', 'btn-cancel', 'CANCELAR');
// inputBtn.render('main');
console.log(inputOk);
console.log(inputCancel);


formTest.addChild(label1);
formTest.addChild(component1);
formTest.addChild(inputOk);
formTest.addChild(inputCancel);

formTest.render('main');