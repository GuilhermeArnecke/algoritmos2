//Atividade 1
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let a = +lines.shift(), b = +lines.shift(); 

for (i = a; i <= b; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(i)
  }
}
