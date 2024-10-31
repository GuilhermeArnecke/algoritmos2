//Atividade 1013
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split(' ');

let [a, b, c] = lines.map(Number);
let maiorAB = (a + b + Math.abs(a - b)) / 2
console.log(maiorAB > c ? `${maiorAB} eh o maior` : `${c} eh o maior`);

//Math.abs, pega o valor absoluto (o maior valor mesmo que negativo e deixa positivo.)