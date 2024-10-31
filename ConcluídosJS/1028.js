//Atividade 1028
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

const takeValues = (line) => line.split(' ').map(a => +a)
let count = +lines.shift()

for (i = 0; i < count; i++) {
  let [figurinhas1, figurinhas2] = takeValues(lines.shift())
  let a = figurinhas1;
  let b = figurinhas2;
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  let maiorDivisor = a;

  console.log(maiorDivisor);
}