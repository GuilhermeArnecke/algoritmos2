//Atividade 1007
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input: number[] = []

rl.on('line', (line) => {
  input.push(parseInt(line))
  if (input.length === 4) {
    const A = input[0]
    const B = input[1]
    const C = input[2]
    const D = input[3]
    console.log(`DIFERENCA = ${(A * B) - (C * D)}`)
    rl.close()
  }
})