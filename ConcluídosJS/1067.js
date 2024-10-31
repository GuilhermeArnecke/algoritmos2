//Atividade 1067
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let count = +lines.shift()

for (i = 1; i <= count; i++) {
  if (i % 2 !== 0) {
    console.log(i)
  }
}