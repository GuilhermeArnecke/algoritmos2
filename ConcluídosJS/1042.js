//Atividade 1042
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split(' ');

let a = +lines.shift(), b = +lines.shift(), c = +lines.shift();
let valores = [a, b, c]
ordem = [...valores].sort((a, b) => a - b);

ordem.forEach(valor => console.log(valor));
console.log("")
valores.forEach(valor => console.log(valor));