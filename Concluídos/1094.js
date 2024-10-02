//Atividade 1094
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let testes = +lines.shift();
let total = 0;
let coelhos = 0, ratos = 0, sapos = 0;
for (i = 0; i < testes; i++) {
  [q,t] = lines.shift().split(' ')
  q = +q
  total += q;
  switch (t) {
    case 'C':
      coelhos += q;
      break
    case 'R':
      ratos += q;
      break
    case 'S':
      sapos += q;
      break
  }
}
console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${coelhos}`)
console.log(`Total de ratos: ${ratos}`)
console.log(`Total de sapos: ${sapos}`)
console.log(`Percentual de coelhos: ${(coelhos / total * 100).toFixed(2)} %`)
console.log(`Percentual de ratos: ${(ratos / total * 100).toFixed(2)} %`)
console.log(`Percentual de sapos: ${(sapos / total * 100).toFixed(2)} %`)