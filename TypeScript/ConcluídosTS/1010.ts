//Atividade 1010
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input: String[] = []

rl.on('line', (line) => {
  input.push(line)
  if (input.length === 2) {
    const [peca1, quantidade1, valor1] = input[0].split(' ').map(Number)
    const [peca2, quantidade2, valor2] = input[1].split(' ').map(Number)
    const total = (quantidade1 * valor1) + (quantidade2 * valor2)
    console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)
    rl.close()
  }
})