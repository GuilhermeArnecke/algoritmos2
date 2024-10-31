//Atividade 1018
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let N = +lines.shift()
let notas = [100, 50, 20, 10, 5, 2, 1];

console.log(N)
notas.forEach(nota => {
  let qtd = Math.floor(N / nota);
  console.log(`${qtd} nota(s) de R$ ${nota},00`);
  N %= nota;
});
//N %= nota atualiza o valor de N após retirar cada nota.
//O forEach faz um loop que executa uma função dentro de cada item de um array.
//O Math.floor serve para reduzir um número real para baixo até o inteiro mais próximo