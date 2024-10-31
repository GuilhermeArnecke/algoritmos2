//Atividade 1759
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let talk = +lines.shift();
let count = ''
while (talk !== 1) {
  talk -= 1
  count += 'Ho '
}
count += 'Ho!'
console.log(count)