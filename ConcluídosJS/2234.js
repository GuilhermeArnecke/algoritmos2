//Atividade 2234
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

const takeValues = (line) => line.split(' ').map(a => +a)

let [H, P] = takeValues(lines.shift())
let result = H / P 
console.log(result.toFixed(2))