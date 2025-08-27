export class Order {
    #user
    #items
    #total

    //Usando desestruturação já dentro do parametro para já pegar de dentro do objeto as propriedades
    constructor(items, user){
        items.forEach(({ product, quantity }) => {
            if (quantity > product.inStock){
                throw new Error('Quantidade insuficiente!')
            }
        });
        this.#user = user;
        this.#items = items;
        //Aqui usamos o reduce que se encaixa perfeitamente nesse caso, multiplicamos o preço do produto com a quantidade selecionada
        this.#total = items.reduce((sum, {product, quantity}) => sum + (product.price * quantity), 0);
    }

    //Método para obter as propriedades em forma de um objeto:
    get data (){
        return {
            user: this.#user,
            items: this.#items,
            total: this.#total
        }
    }
}