//Atividade 1075
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let value = +lines.shift();
for (i = 1; i <= 10000; i++) {
  if (i % value === 2) {
    console.log(i);
  }
}