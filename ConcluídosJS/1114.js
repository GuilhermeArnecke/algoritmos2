//Atividade 1114
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let senha = 2002

while (lines.length) {
    let tentativa = +lines.shift()
    if (!tentativa) break
    
    if (tentativa !== senha) {
        console.log('Senha Invalida')
    } else {
        console.log('Acesso Permitido')
        break
    }
}