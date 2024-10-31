//Atividade 1155
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let S = 1
for (i = 2; i < 101; i++) {
  S = S + 1 / i
}
console.log(S.toFixed(2))