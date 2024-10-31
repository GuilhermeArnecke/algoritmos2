//Atividade 1164
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

function anteriores(a) {
  let aux = []
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      aux.push(i)
    }
  }
  return aux
}

let count = +lines.shift();
for (let i = 0; i < count; i++) {
  let num = +lines.shift()
  let values = anteriores(num)
  let rem = values.pop()
  let soma = values.reduce((a, b) => a + b, 0);
  if (soma === num) {
    console.log(`${num} eh perfeito`)
  } else {
    console.log(`${num} nao eh perfeito`)
  }
}