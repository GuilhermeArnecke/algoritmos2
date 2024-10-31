//Atividade 1020
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let N = +lines.shift()
let tempos = [365, 30, 1];
let palavras = ['ano(s)', 'mes(es)', 'dia(s)'];
var tempo = []

for (i = 0; i < tempos.length; i++) {
  tempo[i] = Math.floor(N / tempos[i]);
  console.log(tempo[i] , palavras[i]);
  N %= tempos[i];
} 