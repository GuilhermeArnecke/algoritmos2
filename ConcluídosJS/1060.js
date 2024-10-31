//Atividade 1060
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let count = 0
while (lines.length) {
  let number = +lines.shift()
  if (!number) break
  if (number >= 0) {
    count += 1
  }
}
console.log(`${count} valores positivos`)