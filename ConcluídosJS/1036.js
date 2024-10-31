//Atividade 1036
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split(' ');

let [a, b, c] = lines.map(Number), ac = a * c, bquad = Math.pow(b, 2), ndown = 2 * a;
let xinit = bquad - (4 * ac);
if (a === 0 || xinit < 0) {
  console.log('Impossivel calcular');
} else {
  let xraiz = Math.sqrt(xinit);
  let x1 = (-b + xraiz) / ndown, x2 = (-b - xraiz) / ndown;
  console.log(`R1 = ${x1.toFixed(5)}\nR2 = ${x2.toFixed(5)}`);
};

//Math.pow faz o elevado
//Math.sqrt faz a raiz quadrada
// || no if faz o "ou"