//Atividade 1176
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let fib = [0, 1]
for(i = 2; i <= 60; i++) {
  fib[i] = fib[i-2] + fib[i-1]
}

let count = +lines.shift();

for (i = 0; i < count; i++) {
  let n = +lines.shift()
  console.log(`Fib(${n}) = ${fib[n]}`)
}