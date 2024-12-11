//Atividade 1079
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let cases = +lines.shift();
const takeValues = (line) => line.split(' ').map(a => +a);

for (i = 0; i < cases; i++) {
    let [nota1, nota2, nota3] = takeValues(lines.shift());
    console.log((((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10).toFixed(1))
}