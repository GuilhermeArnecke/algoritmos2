//Atividade 1014
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let [x, y] = lines.map(Number);
let total = x / y;
console.log(`${total.toFixed(3)} km/l`);