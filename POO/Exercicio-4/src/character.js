export class Character {
    constructor(name, ptLife, attack, deffense){
        this.name = name;
        this.ptLife = ptLife;
        this.attack = attack;
        this.deffense = deffense;
    }

    //Metodo para atacar
    attackEnemy(target, deffenseTarget, ptLifeTarget){
        console.log(`Você escolheu a classe do personagem principal, seu dano sera normal!`)

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
}

export class Thief extends Character {
    constructor(name, ptLife, attack, deffense){
        super(name, ptLife, attack, deffense)
    }

    attackEnemy(target, deffenseTarget, ptLifeTarge){
        console.log(`Você escolheu a classe Thief, seu dano sera em dobro!`)

        let damege = (this.attack * 2) - deffenseTarget;

        if (damege < 0) damege = 0;

        console.log(`${this.name} atacou ${target}, dano causado: ${damege}`);

        ptLifeTarge -= damege;

        if (ptLifeTarge <= 0){
            console.log(`${target} morreu! Fatality.`);
        } else {
            console.log(`${target} ficou vivo, vida restante: ${ptLifeTarget}`);
        }

        return ptLifeTarge;
    }
}