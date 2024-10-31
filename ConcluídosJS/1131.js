//Atividade 1131
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let takeResults = (line) => line.split(' ').map(a => +a);
let grenais = 0, inter = 0, gremio = 0, empates = 0;
let moreOne = 1;

while (moreOne === 1) {
  let [r1, r2] = takeResults(lines.shift())
  if (r1 > r2) {
    inter += 1
    grenais += 1
  } else if (r1 < r2) {
    gremio += 1
    grenais += 1
  } else {
    empates += 1
    grenais += 1
  }
  console.log('Novo grenal (1-sim 2-nao)')
  moreOne = +lines.shift()
}

console.log(`${grenais} grenais`)
console.log(`Inter:${inter}`)
console.log(`Gremio:${gremio}`)
console.log(`Empates:${empates}`)
if (inter > gremio) {
  console.log('Inter venceu mais')
} else if (gremio > inter) {
  console.log('Gremio venceu mais')
} else {
  console.log('Nao houve vencedores')
}