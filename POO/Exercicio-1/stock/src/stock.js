/* um atributo name, atribuível na instanciação
um atributo description, atribuível na instanciação
um atributo price, atribuível na instanciação
um atributo inStock, inicializado sempre em 0
um método addToStock, que tem como parâmetro a quantidade a ser adicionada em estoque e deve somar essa quantidade à variável inStock
um método calculateDiscount, que tem como parâmetro a percentagem de desconto a ser aplicada e retorne o valor do preço com o desconto aplicado */

function Stock(name, description, price, inStock = 0, ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = inStock;
    this.addToStock = (quantity) => {
        this.inStock += quantity
    }
    this.calculateDiscount = (percentage) => {
        return this.price - (this.price * (percentage / 100)); 
        //Primeiro a divisão entre parenteses para saber o valor em porcentagem
        //Depois multiplica a porcentagem com o preço atual para saber quanto deve ser descontado do preço atual
    }
}
const molho = new Stock('Molho ingles', 'Molho derivado do alho', 4.50, 40)
molho.addToStock(20)
console.log(molho.inStock)
console.log(molho.calculateDiscount(10)) //10% de desconto