//Atividade 1009
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let name = lines.shift(), value1 = +lines.shift(), value2 = +lines.shift();
let com = (value2 * 0.15) + value1
console.log(`TOTAL = R$ ${com.toFixed(2)}`)