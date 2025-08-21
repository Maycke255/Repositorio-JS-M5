class Character {
    constructor(name, ptLife, attack, deffense){
        this.name = name;
        this.ptLife = ptLife;
        this.attack = attack;
        this.deffense = deffense;
    }

    //Metodo para atacar
    attack(target, deffenseTarget, ptLifeTarget){
        if(isNaN(deffenseTarget && ptLifeTarget)){
            console.error('INSIRA NÚMEROS PARA REPRESENTAR A VIDA E A DEFESA!');
            return;
        }

        const differenceDff = this.attack - deffenseTarget;
        console.log(`Dano causado: ${differenceDff}.`);
        console.log(deffenseTarget)

        //Caso o resultado do dano dentre o ataque e a defesa seja menor que zero E seja menor ainda que a vida, significa que o alvo morreu
        if (differenceDff <= 0 && differenceDff < ptLifeTarget){
            console.log(`O alvo ${target} morreu! Fatality!!`);
            return;
        }
    }
}

const character = new Character('Maycke', 40, 100, 20);
character.attack('Inimigo', 20, 10);