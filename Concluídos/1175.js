//Atividade 1175
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let values = [0];
for (i = 1; i <= 20; i++) {
  values[i] = +lines.shift()
}
for (i = 1; i <= 10; i++) {
  let aux
  aux = values[i]
  values[i] = values[21-i]
  values[21-i] = aux
}
for (i = 1; i <= 20; i++) {
  console.log(`N[${i-1}] = ${values[i]}`)
}