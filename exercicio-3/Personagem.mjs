export default class Personagem {
    constructor(nome, percentualVida = 100){
        this.nome = nome
        this.percentualVida = percentualVida
    }
    sofreuDano(percentualDano) {
        this.percentualVida -= percentualDano
    }

    usouKitMedico() {
        this.percentualVida + 10 <= 100 ? this.percentualVida += 10 : this.percentualVida = 100
    }
}