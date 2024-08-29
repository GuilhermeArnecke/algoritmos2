//Atividade 1017
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let [horas, vel] = lines.map(Number);
let tot = (vel / 12) * horas;
console.log(tot.toFixed(3))