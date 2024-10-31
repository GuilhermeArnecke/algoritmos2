//Atividade 1007
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let [A, B, C, D] = lines.map(Number);

console.log(`DIFERENCA = ${A * B - C * D}`)