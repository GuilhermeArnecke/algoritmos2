//Atividade 1184
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let metodo = lines.shift();
let soma = Number();
let media = Number();
let matriz = [];

for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 12; j++) {
    matriz[j] = +lines.shift();
    if (j < i) {
      soma += matriz[j];
      media += matriz[j];
    }
  }
}

if (metodo === 'M') {
  console.log((media / 66).toFixed(1));
} else {
  console.log(soma.toFixed(1));
}