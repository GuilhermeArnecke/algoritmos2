Number.prototype.formatarCurrency = function() {
  return `R$ ${this.toFixed(2)}`;
}
let valor = 10;
console.log(valor.formatarCurrency());
//Isso faz com que qualquer valor que eu coloque .formatarCurrency() vai
// receber um R$ atras e dois algarismos após o número.

//this serve par apontar para si próprio

String.prototype.removeEspaços = function() {
  return this.replaceAll(' ', '');
}
console.log('bom dia vai toma no cu'.removeEspaços())
// Remove os espaços, bem legal kk

Array.prototype.cataFruta = function(fnCallback) {
  for (let i = 0; i < this.lenght; i++) {
    fnCallback.call(this, this[i], i);
  }
}
let listaFrutas = ['Morango', 'Abacaxi', 'Manga']

listaFrutas.cataFruta((valor, posicao) => {
  console.log('valor:', valor)
  console.log('posicao:', posicao)
})
//Essa caralha faz basicamente executar um código dentro de cada valor do array
//sendo que essa execução é literalmente falar qual a posição e o valor do objeto.


class Automovel {
  constructor(name) {this.name = name}
  andar() {
    console.log(`Meu ${this.name} esta andando . . . . .`)
  }
}

Automovel.prototype.freiar = function () {
  console.log(`Meu ${this.name} esta freiando . . . . . parou!`)
}

let carro = new Automovel('Gol');
carro.andar()
carro.freiar()

//Aqui temos um carro, atribuimos o nome do carro, depois fazemos uma extenção para andar
//e depois criamos uma função para freiar.
