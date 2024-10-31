//Atividade 2670
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let [a, b, c] = lines.map(Number)
let flor1 = 0, flor2 = 0, flor3 = 0;

flor1 = (b * 2) + (c * 4);
flor2 = (a * 2) + (c * 2);
flor3 = (a * 4) + (b * 2);

if (flor1 <= flor2 && flor1 <= flor3) {
  console.log(flor1)
} else if (flor2 <= flor1 && flor2 <= flor3) {
  console.log(flor2)
} else if (flor3 <= flor1 && flor3 <= flor2) {
  console.log(flor3)
}