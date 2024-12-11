//Atividade 5
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let mediaFinal = +lines.shift()
let pontosRestantes = (((mediaFinal*6) - 60) / 4)
let valorPositivo = pontosRestantes * -1
console.log(valorPositivo.toFixed(2))