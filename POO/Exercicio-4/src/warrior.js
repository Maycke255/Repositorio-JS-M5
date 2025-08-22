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
        this.position = position;
    }

    deffenseOrAttack(position){
        
    }
}