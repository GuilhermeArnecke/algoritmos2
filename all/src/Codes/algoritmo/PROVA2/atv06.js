//Atividade 6
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let saldoIni = +lines.shift()
let operacao = lines.shift().split(' ').map(a => +a)
let valor = lines.shift().split(' ').map(a => +a)

while (operacao.length) {
  let moreOneTime = operacao[0]
  if (!moreOneTime) break

  switch (operacao[0]) {
    case 1:
      saldoIni -= valor[0]
      break
    case 2:
      saldoIni += valor[0]
      break
    case 3:
      console.log(`Saldo Atual: ${saldoIni}`)
      break
    default:
      break 
  }
  valor.shift()
  operacao.shift()
}
console.log(`Saldo Final: ${saldoIni}`)