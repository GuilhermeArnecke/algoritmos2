// Esse é o escolha caso;

let expressao = 1
let texto = '!'
switch (expressao) {
  case 1:
    texto += '1'
    break
  case 2:
    texto += '2'
    break
  default:
    texto += '3'
    break
}
console.log(texto)

//Caso não tenha o break, ele vai achar a operação mas vai seguir executando todos os outros.