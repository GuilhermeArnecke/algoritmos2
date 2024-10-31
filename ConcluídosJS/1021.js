//Atividade 1021
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let N = +lines.shift()
let valor = Math.floor(N * 100)
let notas = [100, 50, 20, 10, 5, 2];
let moedas = [1, 0.50 , 0.25 , 0.10 , 0.05 , 0.01 ];

console.log('NOTAS:')
notas.forEach(nota => {
  let qtd = Math.floor(valor / (nota * 100));
  console.log(`${qtd} nota(s) de R$ ${nota}.00`);
  valor %= (nota * 100);
});
console.log('MOEDAS:')
moedas.forEach(moeda => {
  let qtd = Math.floor(valor / (moeda * 100));
  console.log(`${qtd} moeda(s) de R$ ${moeda.toFixed(2)}`);
  valor %= (moeda * 100);
});

//O 100 serve pra trabalhar com a , ... Sem o 100 não deu certo =(