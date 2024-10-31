//Atividade 1003
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input: number[] = []

rl.on('line', (line) => {
  input.push(parseInt(line))
  if (input.length === 2) {
    const value1 = input[0];
    const value2 = input[1];
    console.log(`SOMA = ${value1 + value2}`)
    rl.close()
  }
})