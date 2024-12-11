//Atividade 1113
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

const takeValues = (line) => line.split(' ').map(a => +a)

while (lines.length) {
    let [x, y] = takeValues(lines.shift())

    if (!x) break

    if (x < y) {
        console.log('Crescente')
    } else if (x > y) {
        console.log('Decrescente')
    }
}