//Atividade 1035
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split(' ');

let [a, b, c, d] = lines.map(a => +a);
if (b > c && d > a && (c + d) > (a + b) && c >= 0 && d >= 0 && a % 2 === 0) {
  console.log(`Valores aceitos`)
} else {
  console.log(`Valores nao aceitos`)
};

//a % 2 === 0 Serve para verificar se o número é par.