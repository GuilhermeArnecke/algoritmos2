//Atividade 1066
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let par = 0, impar = 0, positivo = 0, negativo = 0
for (i = 0; i < 5; i++) {
  let number = +lines.shift()
  if (number % 2 === 0) {
    par += 1
  } else {
    impar += 1
  }
  if (number > 0) {
    positivo += 1
  } else if (number < 0) {
    negativo += 1
  }
}
console.log(`${par} valor(es) par(es)`)
console.log(`${impar} valor(es) impar(es)`)
console.log(`${positivo} valor(es) positivo(s)`)
console.log(`${negativo} valor(es) negativo(s)`)