//Atividade 1072
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let count = +lines.shift(), numIn = 0, numOut = 0;

for (i = 0; i < count; i++) {
    let thatNumber = +lines.shift();
    if (thatNumber >= 10 && thatNumber <= 20) {
        numIn += 1
    } else {
        numOut += 1
    }
}
console.log(`${numIn} in\n${numOut} out`)