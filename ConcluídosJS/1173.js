//Atividade 1173
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let value = +lines.shift()

for (i = 0; i < 10; i++) {
    console.log(`N[${i}] = ${value}`)
    value = value * 2
}