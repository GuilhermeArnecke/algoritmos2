//Atividade 1069
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let testes = +lines.shift()
for (i = 0; i < testes; i++) {
  let achado = lines.shift(String)
  let filtrarAreia = achado.split('').filter(char => char !== '.').join('')
  
  let count = 0;
  let diamante = []

  for (let i = 0; i < filtrarAreia.length; i++) {
    if (filtrarAreia[i] === '<') {
        diamante.push('<');
    } else if (filtrarAreia[i] === '>' && diamante.length > 0) {
        diamante.pop();
        count++;
    }
  }

  console.log(count);
} 