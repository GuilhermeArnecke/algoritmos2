//Atividade 1133
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

var x = parseInt(lines[0]);
var y = parseInt(lines[1]);

var start = Math.min(x, y);
var end = Math.max(x, y);

var result = [];

for (var i = start + 1; i < end; i++) {
    if (i % 5 === 2 || i % 5 === 3) {
        result.push(i);
    }
}

console.log(result.join('\n'));