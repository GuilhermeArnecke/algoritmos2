//Atividade 1534
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

while (lines.length) {
  let x = lines.shift()
  if (!x) break

  let sequencia = []
  sequencia[0] = 1
  
  for (i = 1; i < x; i++) {
    sequencia[i] = 3
  }
  sequencia[sequencia.length - 1] = 2
  console.log(sequencia.join(''))
  for (i = 1; i < x; i++) {
    sequencia[i] = 1
    sequencia[i-1] = 3
    sequencia[sequencia.length - i - 1] = 2
    if (sequencia[sequencia.length - i - 1+ 1] !== 1) {
      sequencia[sequencia.length - i - 1+ 1] = 3
    }
    console.log(sequencia.join(''))
  }
}