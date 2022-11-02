export default class Fatura {
    constructor(id, descricao, quantia, preco) {
        this.id = id;
        this.descricao = descricao;
        quantia > 0 ? this.quantia = quantia : quantia = 0;
        preco > 0 ? this.preco = preco : preco = 0;
    }
    
    get obterValorTotal () {
        return this.preco * this.quantia
    }
}