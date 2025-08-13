/* Na POO, o objetivo é modelar o mundo real usando:
Objetos → entidades com propriedades (dados) e métodos (funções).
Classes → moldes para criar objetos (em JS moderno).
Instâncias → objetos criados a partir de uma classe ou função construtora.
Herança → objetos podem herdar características de outros. 

Funções Construtoras
São funções comuns, mas usadas com a palavra-chave new para criar objetos de um mesmo “molde”.

Como funcionam
Quando você usa new antes de chamar a função:
Um novo objeto vazio é criado.
O this dentro da função aponta para esse novo objeto.
O objeto é ligado ao .prototype da função.
O objeto é retornado automaticamente.*/

//Criamos uma função com a inicial maiuscula, representando uma função construtora, e os parametros serão os objetos a serem gerados
function Book (name, author, genres, copies, yearOfRelease) {
    this.name = name
    this.author = author
    this.genres = genres
    this.copies = copies
    this.yearOfRelease = yearOfRelease
}

const author = { name: 'Padre Brown' }
const genres = [ 'Suspense', 'Terror', 'Misterio' ]

//Isso e uma instancia, criamos uma variavel chamando a função construtora
const theThreeInstrumentsOfDeath = new Book('theThreeInstrumentsOfDeath', author, genres, 578, 2010)
console.log(theThreeInstrumentsOfDeath)

function Pessoa (nome, idade){
    this.name = nome
    this.age = idade

    this.falar = function (){
        console.log(`Olá, meu nome e ${this.name} e tenho ${this.age} anos de idade.`)
    }
}

//Criando as instancias
const pessoa1 = new Pessoa('Maycke', 21)
const pessoa2 = new Pessoa('Moises', 35)
console.log(pessoa1, pessoa2)

//Chamando a função falar a partir das instancias
pessoa1.falar()
pessoa2.falar()

// ---- OU ENTÃO PODEMOS CRIAR ASSIM -----

//Usamos a palavra reservada class para definir um molde, uma classe e a mesma coisa que uma função construtora
//A diferença e que podemos organizar melhor 
class PcGamer {
    constructor(CPU, motherBoard, SSD, RAM, font, GPU) {
        this.CPU = CPU;
        this.motherBoard = motherBoard;
        this.SSD = SSD;
        this.RAM = RAM;
        this.font = font;
        this.GPU = GPU;
    }

    falar(){
        console.log(`Vou monstar um pc com um ${this.CPU} e com uma ${this.GPU}!`)
    }
}

const pc = new PcGamer('Ryzen 5 5600', 
    'MSI A520M-A PRO', 
    'SSD Kingston 500GB', 
    'Memoria RAM XPG 8 GB 3200Mhz', 
    'Fonte MSI MAG 650W, 80 Plus Bronze',
    'RX 7600 GIGABYTE 8GB');

/* Como temos apenas uma função construtora dentro da class, não precisamos acessar diretamente a função usando "pc.constructor", ela e a função
constructor que sempre deve existir, ela e responsavel por receber as instancias e as transforma-las em objetos, os metodos abaixo dela que
precisam ser associados e chamados como uma função */
console.log(pc);
pc.falar();