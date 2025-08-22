/* -Uma classe Mage que representa outro tipo de personagem e também herda de Character. No entanto, essa classe também deve ter um atributo 
para pontos de magia. Além disso, ela também deve sobrescrever o método de ataque para que o cálculo utilize os pontos de ataque somados aos 
pontos de magia. 

-No entanto, essa classe também deve ter um atributo para pontos de magia.

-Além disso, ela também deve sobrescrever o método de ataque para que o cálculo utilize os pontos de ataque somados aos pontos de magia.

-A classe Mage também deverá ter um outro método exclusivo que servirá para aumentar os pontos de vida de um personagem alvo (passado como 
argumento do método) em um valor de duas vezes os pontos de magia do personagem atual. */

import { Character } from "./character.js";

export class Mage extends Character{
    constructor(name, ptLife, attack, deffense, magicPts){
        super(name, ptLife, attack, deffense);

        this.magicPts = magicPts;
    }

    attackEnemy(target, deffenseTarget, ptLifeTarget){
        console.log(`Você escolheu a classe mago, seus pontos de ataque serão somados com seus pontos de magia, te dando mais 
poder de ataque e você poderá aplicar dano mágico em vez de dano normal!`);

            let magicDamege = this.attack + this.magicPts;

            let damege = magicDamege - deffenseTarget

            if (damege < 0) damege = 0;
            console.log(`${this.name} atacou ${target}, dano causado ${damege} de dano mágico.`);

            ptLifeTarget -= damege;

            if (ptLifeTarget <= 0) {
                console.log(`${target} morreu! Fatality.`);
                ptLifeTarget = 0; //Para não deixar a vida negativa
            } else {
                console.log(`${target} ficou vivo, vida restante: ${ptLifeTarget}`);
            }

            return ptLifeTarget;
    }

    //Método exclusivo para curar algum personagem
    healing(character){
        let healingPower = this.magicPts * 2;

        healingPower += character.ptLife;

        console.log(`Vida atual do personagem ${character.name}: ${healingPower}.`);
        return healingPower;
    }
}