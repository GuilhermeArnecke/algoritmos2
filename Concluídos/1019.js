//Atividade 1019
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let tmp = +lines.shift()
let tempos = [3600, 60, 1]
var tempo = []
for (i = 0; i < tempos.length; i++) {
  tempo[i] = Math.floor(tmp / tempos[i]); 
  tmp %= tempos[i];
}
console.log(`${tempo[0]}:${tempo[1]}:${tempo[2]}`);