export default class Juros {
    constructor(capitalInicial, taxaAplicada, tempo) {
        this.capitalInicial = capitalInicial;
        this.taxaAplicada = taxaAplicada;
        this.tempo = tempo;
    }

    calcularJurosSimples() {
        return `R$ ${(this.capitalInicial * this.taxaAplicada * this.tempo).toFixed(2)}`;
    }

    calcularJurosCompostos() {
        return (this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo).toFixed(2);
    }
}