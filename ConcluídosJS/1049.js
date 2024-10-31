//Atividade 1049
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n'); 

let info = []
for (i = 0; i <= 2; ++i) {
  info[i] = lines.shift(String)
}

if (info[0] === 'vertebrado') {
  if (info[1] === 'ave') {
    if (info[2] === 'carnivoro') {
      console.log('aguia')
    } else {
      console.log('pomba')
    }
  } else if (info[1] === 'mamifero') {
    if (info[2] === 'onivoro') {
      console.log('homem')
    } else {
      console.log('vaca')
    }
  }
} else if (info[0] === 'invertebrado') {
  if (info[1] === 'inseto') {
    if (info[2] === 'hematofago') {
      console.log('pulga')
    } else {
      console.log('lagarta')
    }
  } else if (info[1] === 'anelideo') {
    if (info[2] === 'hematofago') {
      console.log('sanguessuga')
    } else {
      console.log('minhoca')
    }
  }
}