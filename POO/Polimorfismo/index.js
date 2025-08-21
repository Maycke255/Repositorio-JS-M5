/* O que e polimorfismo?
Polimorfismo em JS consiste em uma sub classe reescrever o metodo da super classe, fazemos isso atravez do metodo override, o método deve ter o
mesmo nome da super classe, por exemplo:  */
class Vehicle {
    move(){ //Estamos construindo apenas um metodo primeiro como exemplo, mas o polimorfismo não pode ser usado em constructors, cada class
        //tem o seu proprio constructor.
        console.log(`O veiculo esta se movendo...`);
    }
}

//Em seguida usamos a herança:
class Bike extends Vehicle {
    //Aqui reconstruimos o método, porém alteramos sua funcionalidade, e o mesmo método, mas com uma função diferente
    move(arg){
        console.log(`${arg} esta andando de bicicleta`);
    }
}

class Car extends Vehicle{
    move(arg){
        console.log(`O carro esta a ${arg} km/hr!!`)
    }
}

const vehicle = new Vehicle();
const bike = new Bike();
const ferrari = new Car();
/* Aqui estamos chamando as instancias com o MESMO METODO DA CLASSE MÃE, mas as suas funções são diferentes */
// vehicle.move();
// bike.move('Maria');
// ferrari.move(80);

/* Essa e a forma mais eficaz de trabalhar com polimorfismo, afinal os metodos são os mesmos, mas as funções de ambos são diferentes e cada
um espera um tipo diferente de argumento, por exemplo, a Bike espera uma string, no caso o nome de uma pessoa, já o Car espera um number,
então o jeito mais facil e passar dois parametros, um deles sendo o que recebe a instancia seja ela do Car ou Bike, e a outra para o
argumento. */
function start (vehicle, arg) {
    console.log('Ligando o vículo...');
    vehicle.move(arg); // Vamos chamar aqui dentro o metodo, mesmo que não esteja ligado a class ainda, a entrada irá receber a instancia
}

start(bike, 'Maria');
start(ferrari, 80);