//Atividade 1078
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let number = +lines.shift()
for (i = 1; i <= 10; i++) {
  console.log(`${i} x ${number} = ${i * number}`)
}