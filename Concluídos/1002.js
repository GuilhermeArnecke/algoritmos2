//Atividade 1002
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = 3.14159;
let raio = lines.shift();

let raio2 = (raio * raio);

let area = (n * raio2);

console.log(`A = ${area.toFixed(4)}`)