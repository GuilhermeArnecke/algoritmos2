//Atividade 1142
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let numberLines = +lines.shift(), count = [1, 2, 3, 4];
for (i = 1; i <= numberLines; i++) {
  console.log(`${count[0]} ${count[1]} ${count[2]} PUM`);
  count[0] = count[0] + 4;
  count[1] = count[1] + 4;
  count[2] = count[2] + 4;
}