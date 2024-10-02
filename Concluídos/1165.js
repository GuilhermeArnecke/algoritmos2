//Atividade 1165
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

function ehPrimo(X) {
  if (X <= 1) return false;
  if (X === 2) return true;
  if (X % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(X); i += 2) {
      if (X % i === 0) {
          return false;
      }
  }

  return true;
}

var N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) {
  let X = parseInt(lines[i]);

  if (ehPrimo(X)) {
      console.log(`${X} eh primo`);
  } else {
      console.log(`${X} nao eh primo`);
  }
}