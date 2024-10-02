//função normal
function algo(a, b) {
  return a + b
}
console.log(algo(1, 2))

//função jogada direto numa variável
let subt = function (a, b) {
  return a - b
};
console.log(subt(2, 1))

//arow function
const multipli = (a, b) => {return a * b}
console.log(multipli(1, 2))

//callback, basicamente chamar uma função dentro de uma função
function mult (a, b) {
  return a * b
}
function add (x,y) {
  return x + y
}
function calcular (x, y, fn) {
  return fn(x,y)
}
console.log(calcular(10, 5, add));
console.log(calcular(10, 5, mult));

//função anonima
console.log(calcular(10, 5, (i,j) => i-j))
/* É bem louco mas é literalmente declarar uma função dentro de um console.log */


//arow function com muita coisa
const somaDif = (a, b) => {
  console.log('a' = a);
  console.log('b' = b);
  return a + b
}
console.log('soma:', somaDif(10,20))
/*Obrigatório uso de um return em arow function com múltiplas linhas.*/