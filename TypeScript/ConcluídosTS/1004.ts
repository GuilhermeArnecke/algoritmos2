//Atividade 1004
import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input: number[] = []

rl.on('line', (line) => {
  input.push(parseInt(line))
  if (input.length === 2) {
    const A = input[0];
    const B = input[1];
    console.log(`PROD = ${A * B}`)
    rl.close()
  }
})