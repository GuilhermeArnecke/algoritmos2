//Atividade 1178
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let value = +lines.shift();
for (i = 0; i <= 99; i++) {
  console.log(`N[${i}] = ${value.toLocaleString('en-US', {minimumFractionDigits: 4, useGrouping: false})}`);
  value = value / 2;
}

//'en-US' Precisa ter por conta de que a formatação do toLocaleString serve também para fazer formatação contábil aí se necessário pode fazer U$;
//toLocaleString: é um toFixed que não faz arredondamento;
//useGrouping: false: remove as virgulas e pontos a cada grupo de 3 digiros.