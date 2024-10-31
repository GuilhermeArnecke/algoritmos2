//Atividade 1059
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let count = 2
for (i = 0; i < 50; i++) {
  console.log(count)
  count += 2
}