//Atividade 1005
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let A = +lines.shift()
let B = +lines.shift()

let media = (A * 3.5 + B * 7.5) / 11

console.log(`MEDIA = ${media.toFixed(5)}`)

// Usado Média Ponderada
// https://brasilescola.uol.com.br/matematica/media-ponderada.htm