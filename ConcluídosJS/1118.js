//Atividade 1118
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let again = 1
while (again === 1) {
  let n1 = +lines.shift()
  if (n1 > 10 || n1 < 0) {
    while (n1 > 10 || n1 < 0) {
      console.log('nota invalida')
      n1 = +lines.shift()
    }
  }

  let n2 = +lines.shift()
  if (n2 > 10 || n2 < 0) {
    while (n2 > 10 || n2 < 0) {
      console.log('nota invalida')
      n2 = +lines.shift()
    }
  }

  let media = (n1 + n2) / 2
  console.log(`media = ${media.toFixed(2)}`)

  console.log('novo calculo (1-sim 2-nao)')

  let newAgain = +lines.shift()
  if (newAgain !== 1 && newAgain !== 2) {
    while (newAgain !== 1 && newAgain !== 2) {
      console.log('novo calculo (1-sim 2-nao)')
      newAgain = +lines.shift()
      again = newAgain
    }
  }
  again = newAgain
}