//Atividade 1006
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let A = +lines.shift();
let B = +lines.shift();
let C = +lines.shift();

let media = (A * 2 + B * 3 + C * 5) / 10;

console.log(`MEDIA = ${media.toFixed(1)}`)
