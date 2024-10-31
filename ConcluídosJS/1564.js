//Atividade 1564
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

while (lines.length) {
  let x = lines.shift()
  if (!x) break
  x === '0' ? console.log('vai ter copa!') : console.log('vai ter duas!');
}