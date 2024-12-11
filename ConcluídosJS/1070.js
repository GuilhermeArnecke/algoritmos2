//Atividade 1070
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let num = +lines.shift()

if (num % 2 === 0) {
    num += 1
    for (i = 1; i <= 6; i++) {
        console.log(num)
        num += 2
    }
} else {
    for (i = 1; i <= 6; i++) {
        console.log(num)
        num += 2
    }
}
