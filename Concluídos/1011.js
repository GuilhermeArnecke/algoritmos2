//Atividade 1011
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

const pi = 3.14159;
let R = +lines.shift(), Rcalc = (R * R * R);
let vol = ((4/3) * pi * Rcalc);
console.log(`VOLUME = ${vol.toFixed(3)}`)