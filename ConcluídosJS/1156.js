//Atividade 1156
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let S = 1;
let soma = 1;
let mult = 1;

for (i = 2; i < 19; i++) {
  S = S + (soma + 2) / (mult * 2);
  soma += 2;
  mult *= 2;
}
console.log(S.toFixed(2));