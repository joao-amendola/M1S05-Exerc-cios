import Juros from "./Juros.mjs";

const teste1 = new Juros(10000, 0.07, 24)
console.log(teste1.calcularJurosSimples())
console.log(teste1.calcularJurosCompostos())

const teste2 = new Juros(10000, 0.15, 10)
console.log(teste2.calcularJurosSimples())
console.log(teste2.calcularJurosCompostos())