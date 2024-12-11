//Atividade 4
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

const takeValues = (line) => line.split(' ').map(a => +a)

let notas = takeValues(lines.shift())
let pesos = [3, 3, 2, 1, 1]
let medias = []
let mediaFinal = 0

for (i = 0; i < 5; i++) {
  medias.push(notas[i] * pesos[i])
  mediaFinal += medias[i]
}

mediaFinal = mediaFinal / 10
console.log(mediaFinal.toFixed(2))

if (mediaFinal >= 7.35) {
  console.log('Aprovado')
} else if (mediaFinal < 4) {
  console.log('Reprovado')
} else {
  console.log('Em Exame')
}
