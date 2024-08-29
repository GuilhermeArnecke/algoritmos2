//Atividade 1016
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let km = +lines.shift(), tempo = km * 2;
console.log(`${tempo} minutos`);