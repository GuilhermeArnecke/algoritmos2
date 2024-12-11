//Atividade 3
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let senha = lines.shift()
let tentativas = lines.shift().split(' ')

for (i = 0; i < 3; i++) {
  if (tentativas[i] !== senha) {
    console.log('Senha Incorreta')
    if (i === 2) {
      console.log('Acesso Bloqueado')
    }
  } else {
    console.log('Acesso Permitido')
    break
  }
}