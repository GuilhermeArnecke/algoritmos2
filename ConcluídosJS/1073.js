//Atividade 1073
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let num = +lines.shift();

for (i = 2; i <= num; i += 2) {
  console.log(`${i}^2 = ${i * i}`)
}