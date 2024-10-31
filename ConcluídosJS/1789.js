//Atividade 1789
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

  while (lines.length) {
    let testes = +lines.shift()
    if (!testes) break

    let velocidades = lines.shift().split(' ').map(a => +a)
    let result = Math.max(...velocidades)
    if (result < 10) {
      console.log('1')
    } else if (result >= 10 && result < 20) {
      console.log('2')
    } else {
      console.log('3')
    }
  }