//Atividade 1008
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let [A, B, C] = lines.map(Number)
let salary = (B * C)

console.log(`NUMBER = ${A}\nSALARY = U$ ${salary.toFixed(2)}`)