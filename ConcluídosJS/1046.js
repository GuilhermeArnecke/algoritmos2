//Atividade 1046
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split(' '); 

let tmpinit = +lines.shift(), tmpfin = +lines.shift();
let result = 0;
if (tmpfin <= tmpinit) {
  let tmpnew = tmpfin + 24
  result = tmpnew - tmpinit;
} else {
  result = tmpfin - tmpinit
}
console.log(`O JOGO DUROU ${result} HORA(S)`)