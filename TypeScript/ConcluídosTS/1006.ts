//Atividade 1006
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input: number[] = []
const peso1: number = 2
const peso2: number = 3
const peso3: number = 5

rl.on('line', (line) => {
  input.push(parseFloat(line))
  if (input.length === 3) {
    const A = input[0]
    const B = input[1]
    const C = input[2]
    const result = ((A * peso1) + (B * peso2) + (C * peso3))
    const media = result / 10
    console.log(`MEDIA = ${media.toFixed(1)}`)
    rl.close()
  }
})