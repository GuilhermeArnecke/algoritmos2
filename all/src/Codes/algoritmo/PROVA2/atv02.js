//Atividade 2
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let x = +lines.shift()
let countPares = 0, countImpares = 0
let totalPares = 0, totalImpares = 0

for (i = 1; i <= x; i++) {
  if (i % 2 === 0) {
    ++countPares
    totalPares = totalPares + i
  } else {
    ++countImpares
    totalImpares = totalImpares + i
  }
}
console.log(`Pares: ${countPares} Total: ${totalPares}`)
console.log(`Impares: ${countImpares} Total: ${totalImpares}`)