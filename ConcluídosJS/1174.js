//Atividade 1174
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

for (let i = 0; i <= 99; i++) {
  let Num = +lines.shift()
  if (Num <= 10) {
    console.log(`A[${i}] = ${Num.toFixed(1)}`);
  }
}