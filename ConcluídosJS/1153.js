//Atividade 1153
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let number = +lines.shift(), count = number, fatorial = number;
for (i = 1; i < count; i++) {
  fatorial = fatorial * (number - i);
}
console.log(fatorial);