//Atividade 1012
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split(' ');

let [a, b, c] = lines.map(Number);
let tri = (a * c) / 2;
let cir = (c * c) * 3.14159;
let tra = ((a + b) * c) / 2;
let qua = b * b;
let ret = a * b;
console.log(`TRIANGULO: ${tri.toFixed(3)}\nCIRCULO: ${cir.toFixed(3)}`)
console.log(`TRAPEZIO: ${tra.toFixed(3)}\nQUADRADO: ${qua.toFixed(3)}\nRETANGULO: ${ret.toFixed(3)}`)
