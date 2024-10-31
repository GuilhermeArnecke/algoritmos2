//Atividade 1467
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

const takeValues = (line) => line.split(' ').map(a => +a)

while (lines.length) {
  let x = lines.shift()
  if (!x) break

  let [a, b, c] = takeValues(x)
  console.log(a, b, c)
  if (a !== b && a !== c) {
    console.log('A')
  } else if (b !== a && b !== c) {
    console.log('B')
  } else if (c !== a && c !== b) {
    console.log('C')
  } else {
    console.log('*')
  }
}