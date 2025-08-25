/* -Uma classe Warrior que representa outro tipo de personagem e também herda de Character.Essa classe também deve possuir um atributo para pontos 
de escudo e outro para posição, que poderá ser de ataque ou defesa.Ela também deve sobrescrever o método de ataque para que ele só aconteça se 
a posição atual for a de ataque.Por fim, ela deverá ter também um método para mudar a posição entre ataque e defesa. Enquanto estiver em posição 
de defesa, os pontos de escudo devem ser somados aos de defesa para fazer o cálculo do método de ataque. Ao trocar para a posição de ataque 
apenas os pontos de defesa devem ser considerados (comportamento normal).

-Essa classe também deve possuir um atributo para pontos de escudo e outro para posição, que poderá ser de ataque ou defesa.

-Ela também deve sobrescrever o método de ataque para que ele só aconteça se a posição atual for a de ataque. */

import { Character } from "./character.js";

export class Warrior extends Character{
    constructor(name, ptLife, attack, deffense, shildPts, position){
        super(name, ptLife, attack, deffense );
        this.shildPts = shildPts;
        this.position = position.toLowerCase();
    }

    attackEnemy(target, deffenseTarget, ptLifeTarget){
        //Caso seja diferente de ataque, significa que ele esta na defesa, então não faz nada.
        if (this.position !== "ataque") {
            console.log(`${this.name} está em posição de DEFESA e não pode atacar!`);
            return ptLifeTarget; // não muda nada
        }

        //Ataque normalmente, como se fosse no character
        console.log(`Você escolheu a classe do personagem warrior, seu dano sera normal caso esteja na posição de ataque, caso esteja na posição de 
defesa, você não atacara, porém, sua defesa somara junto com seus pontos de escudo para tankar!`)

        let damege = this.attack - deffenseTarget;

        //Caso dano causado seja menor que 0, o inimigo não sofreu dano algum
        if (damege < 0) damege = 0;
        console.log(`${this.name} atacou ${target}, dano causado ${damege}`);

        //Aplica o dano a vida do inimigo
        ptLifeTarget -= damege;

        //Caso o damage aplicado seja menor ou igual 0, significa que morreu 
        if (ptLifeTarget <= 0){
            console.log(`${target} morreu! Fatality.`);
            ptLifeTarget = 0; //Para não deixar a vida negativa
        } else {
            console.log(`${target} ficou vivo, vida restante: ${ptLifeTarget}`);
        }

        //Retorna a vida
        return ptLifeTarget;
    }

    changePosition(){
        if (this.position === 'ataque'){
            this.position = 'defesa';
            this.deffense += this.shildPts; //Adiciona o bônus de escudo, soma os pontos de escudo a defesa
            console.log(`${this.name} mudou sua posição para defesa, sua defesa foi aumentada em ${this.deffense}`);
        } else {
            this.position = 'ataque';
            this.deffense -= this.shildPts; //Remove o bônus de escudo
            console.log(`${this.name} mudou para a posição de ataque, você pode atacar normalmente novamente, porém, sua defesa foi ajusta para ${this.deffense}`);
        }
    }
}