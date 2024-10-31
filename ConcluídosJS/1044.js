//Atividade 1044
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

const takeValues = (line) => line.split(' ').map(a => +a)

let [a, b] = takeValues(lines.shift())
if (a >= b) {
  if (a % b === 0) {
    console.log('Sao Multiplos')
  } else {
    console.log('Nao sao Multiplos')
  }
} else {
  if (b % a === 0) {
    console.log('Sao Multiplos')
  } else {
    console.log('Nao sao Multiplos')
  }
}