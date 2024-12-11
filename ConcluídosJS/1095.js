//Atividade 1095
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let countI = 1;
let countJ = 60;

console.log(`I=${countI} J=${countJ}`);
while (countJ !== 0) {
  countI += 3
  countJ -= 5
  console.log(`I=${countI} J=${countJ}`);
}