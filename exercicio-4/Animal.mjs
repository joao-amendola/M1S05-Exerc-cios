export default class Animal {
    constructor(nome, idade, som){
        this.nome = nome
        this.idade = idade
        this.som = som
    }
    
    som() {
        return som
    }
}

export class Cachorro extends Animal {
    constructor(nome, idade) {
      super(nome, idade, "latido")
    }
    // som() {
    //   console.log("latido");
    // }
  }

export class Gato extends Animal {
    constructor(nome, idade) {
        super(nome, idade, "miado")
    }
    // som() {
    //   console.log('miado');
    // }
}