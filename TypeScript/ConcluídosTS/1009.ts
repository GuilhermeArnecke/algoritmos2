//Atividade 1009
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const name: string[] = []
const input: number[] = []

rl.on('line', (line) => {
  if (name.length === 0) {
    name.push(String(line))
  } else {
    input.push(parseFloat(line))
    if (input.length === 2) {
      const salary = input[0]
      const montant = input[1]
      const acrecimo = montant * 0.15
      const result = acrecimo + salary
      console.log(`TOTAL = R$ ${result.toFixed(2)}`)
      rl.close()
    }
  }
})