//Atividade 1151
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let value = +lines.shift(), help = [0, 1]
let result = String();
result = help[0] + ' ' + help[1];

for (i = 2; i < value; i++) {
  help[i] = help[i-2] + help[i-1];
  result = result + ' ' + help[i]
}
console.log(result)