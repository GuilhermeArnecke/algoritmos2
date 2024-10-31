//Atividade 1051
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let value = +lines.shift();

if (value <= 2000) {

  console.log('Isento');

} else if (value > 2000 && value <= 3000) {

  let imposto1;
  value = value - 2000;
  imposto1 = value * 0.08;
  console.log(`R$ ${imposto1.toFixed(2)}`);

} else if (value > 3000 && value <= 4500) {

  let imposto1, imposto2;
  value = value - 2000;
  imposto1 = 1000 * 0.08;
  value = value - 1000;
  imposto2 = value * 0.18;
  let result = imposto1 + imposto2;
  console.log(`R$ ${result.toFixed(2)}`);

} else if (value > 4500) {

  let imposto1, imposto2, imposto3;
  value = value - 2000;
  imposto1 = 1000 * 0.08;
  value = value - 1000;
  imposto2 = 1500 * 0.18;
  value = value - 1500;
  imposto3 = value * 0.28;
  let result = imposto1 + imposto2 + imposto3;
  console.log(`R$ ${result.toFixed(2)}`);
}