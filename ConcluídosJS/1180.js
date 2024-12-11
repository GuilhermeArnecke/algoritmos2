//Atividade 1180
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let itens = +lines.shift()
let values = lines.shift()
let valuesNumber = values.split(' ').map(a => +a)
let less = valuesNumber[0]
let count = 0

for (i = 1; i < itens; i++) {
    if (valuesNumber[i] < less) {
        less = valuesNumber[i]
        count = i
    }
}
console.log(`Menor valor: ${less}\nPosicao: ${count}`)