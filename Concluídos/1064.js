//Atividade 1064
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n'); 

let values = [a1, a2, a3, a4, a5, a6] = lines.map(Number)
let numbers = 0, media = [];
for (i = 0; i <= values.length; ++i) {
  if (values[i] > 0) {
    numbers = numbers + 1
    media[i] = values[i]
  } else media[i] = -1
}
let newMedia = 0
for (i = 0; i <= media.length; ++i) {
  if (media[i] > 0) {
    newMedia += media[i]
  }
}
let mediaFinal = newMedia / numbers
console.log(`${numbers} valores positivos\n${mediaFinal.toFixed(1)}`);