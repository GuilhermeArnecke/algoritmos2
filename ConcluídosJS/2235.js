//Atividade 2235
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

const takeValues = (line) => line.split(' ').map(a => +a)
let [a, b, c] = takeValues(lines.shift())

if (a + b === c || a + c === b || b + c === a) {
  console.log('S')
} else if (a === c || a === b || b === c) {
  console.log('S')
} else {
  console.log('N')
}