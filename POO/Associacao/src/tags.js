class Details {
    constructor(type, geration, use, brands, highlight) {
        this.type = type;
        this.geration = geration;
        this.use = use
        this.brands = brands;
        this.highlight = highlight;
    }

    description(){
        return `PC ryzen ideal para ${this.type} de ${this.geration}, pode ser se usar ele para ${this.use} entre outras tarefas, algumas das suas principais marcas
        são ${this.brands}, tendo destaques em componentes como a ${this.highlight}.`
    }
}

module.exports = Details

