//Atividade 1065
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let count = 0
for (i = 0; i < 5; i++) {
  let n = +lines.shift()
  if (n % 2 === 0) {
    count++
  }
}
console.log(`${count} valores pares`)