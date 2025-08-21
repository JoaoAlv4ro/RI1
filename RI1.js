class Personagem {
    constructor(nome, codinome, arma, velocidade, forca, resistencia) {
        this.nome = nome;
        this.codinome = codinome;
        this.arma = arma;
        this.velocidade = velocidade;
        this.forca = forca;
        this.resistencia = resistencia;
    }

    descricao() {
        return "Nome do Personagem: " + this.nome + "\n" +
               "Codinome: " + this.codinome + "\n" +
               "Arma: " + this.arma + "\n" +
               "Velocidade: " + this.velocidade + "\n" +
               "Força: " + this.forca + "\n" +
               "Resistência: " + this.resistencia;
    }

    getForca() {
        return this.forca;
    }
    getResistencia() {
        return this.resistencia;
    }
    getVelocidade() {
        return this.velocidade;
    }
}

let personagem1 = new Personagem("Capitão América", "Steve Rogers", "Escudo", 8, 9, 7);
let personagem2 = new Personagem("Homem de Ferro", "Tony Stark", "Armadura", 9, 8, 6);
let personagem3 = new Personagem("Thor", "Thor", "Martelo", 10, 10, 10);
let personagem4 = new Personagem("Hulk", "Bruce Banner", "Força Bruta", 5, 10, 10);
let personagem5 = new Personagem("Viúva Negra", "Natasha", "Armas de Fogo", 9, 7, 8);
let personagem6 = new Personagem("Homem Aranha", "Peter Parker", "Teia", 9, 8, 7);
let personagem7 = new Personagem("Pantera Negra", "T'Challa", "Garras", 8, 9, 8);
let personagem8 = new Personagem("Doutor Estranho", "Strange", "Magia", 7, 8, 9);

let thanos = new Personagem("Thanos", "Thanos?", "Manopla do Infinito", 7, 11, 11);

let personagens = [personagem1, personagem2, personagem3, personagem4, personagem5, personagem6, personagem7, personagem8];

console.log('Oponente!');
console.log(thanos.descricao());
console.log("-----------------------------");


for (let i = 0; i < personagens.length; i++) {
    let personagem = personagens[i];
    console.log(personagem.descricao());
    console.log("-----------------------------");

    console.log("!Combate entre " + personagem.nome + " e " + thanos.nome + "!");

    combateForca = personagem.getForca() - thanos.getForca();
    combateVelocidade = personagem.getVelocidade() - thanos.getVelocidade();
    combateResistencia = personagem.getResistencia() - thanos.getResistencia();

    if (combateForca > 0) {
        console.log(personagem.nome + " vence em força comparado ao " + thanos.nome);
    } else if (combateForca < 0) {
        console.log(thanos.nome + " vence em força comparado ao " + personagem.nome);
    } else {
        console.log(personagem.nome + " e " + thanos.nome + " empataram em força");
    }

    if (combateResistencia > 0) {
        console.log(personagem.nome + " vence em resistência comparado ao " + thanos.nome);
    } else if (combateResistencia < 0) {
        console.log(thanos.nome + " vence em resistência comparado ao " + personagem.nome);
    } else {
        console.log(personagem.nome + " e " + thanos.nome + " empataram em resistência");
    }

    if (combateVelocidade > 0) {
        console.log(personagem.nome + " vence em velocidade comparado ao " + thanos.nome);
    } else if (combateVelocidade < 0) {
        console.log(thanos.nome + " vence em velocidade comparado ao " + personagem.nome);
    } else {
        console.log(personagem.nome + " e " + thanos.nome + " empataram em velocidade");
    }
    console.log("-----------------------------");
}
