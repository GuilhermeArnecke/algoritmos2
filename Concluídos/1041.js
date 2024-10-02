//Atividade 1041
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split(' ');

let [X, Y] = lines.map(Number);

if (X > 0 && Y > 0) console.log('Q1');
else if (X < 0 && Y > 0) console.log('Q2');
else if (X < 0 && Y < 0) console.log('Q3');
else if (X > 0 && Y < 0) console.log('Q4');
else if (X === 0 && Y !== 0) console.log('Eixo Y');
else if (Y === 0 && X !== 0) console.log('Eixo X');
else if (X === 0 && Y === 0) console.log('Origem');