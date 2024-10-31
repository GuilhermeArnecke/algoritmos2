//Atividade 1043
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

const takeValues = (line) => line.split(' ').map(a => +a)

let [a, b, c] = takeValues(lines.shift());
let ordem = []
ordem.push(a, b, c)
ordem.sort((a, b) => a - b);

if (ordem[0] + ordem[1] > ordem[2]) {
  let perimetro = 0
  perimetro = a + b + c
  console.log(`Perimetro = ${perimetro.toFixed(1)}`)
} else {
  let area = 0
  area = ((a + b) * c) / 2
  console.log(`Area = ${area.toFixed(1)}`)
}