//Atividade 1074
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let count = +lines.shift();

for (i = 0; i < count; i++) {
    let thatNumber = +lines.shift();
    if (thatNumber < 0 && thatNumber % 2 === 0) {
        console.log('EVEN NEGATIVE')
    } else if (thatNumber > 0 && thatNumber % 2 === 0) {
        console.log('EVEN POSITIVE')
    } else if (thatNumber < 0 && thatNumber % 2 !== 0) {
        console.log('ODD NEGATIVE')
    } else if (thatNumber > 0 && thatNumber % 2 !== 0) {
        console.log('ODD POSITIVE') 
    } else {
        console.log('NULL')
    }
}