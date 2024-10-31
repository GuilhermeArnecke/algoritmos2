//Atividade 2242
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let frase = lines.shift()
let palavra = frase.split('')
let vogais = [], consoantes = []
let verify = ['a', 'e', 'i', 'o', 'u']

let verification = palavra.map(element => verify.includes(element))

for (i = 0; i < verification.length; i++) {
  if (verification[i] === true) {
    vogais.push(palavra[i])

  } else {
    consoantes.push(palavra[i])
  }
}

let trueVogais = [...vogais]
let vogaisRev = [...vogais].reverse()
let count1 = 0, count2 = 0
for (i = 0; i < vogais.length; i++) {
  if (trueVogais[i] === vogaisRev[i]) {
    count1 += 1
  } else {
    count2 += 1
  }
}
if (count2 === 0) {
  console.log('S')
} else {
  console.log('N')
}