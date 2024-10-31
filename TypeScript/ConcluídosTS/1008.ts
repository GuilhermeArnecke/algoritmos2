//Atividade 1008
import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input: number[] = []

rl.on('line', (line) => {
  input.push(parseFloat(line))
  if (input.length === 3) {
    const numero = input[0]
    const horas = input[1]
    const valor = input[2]
    console.log(`NUMBER = ${numero}`)
    const salary = (horas * valor)
    console.log(`SALARY = U$ ${salary.toFixed(2)}`)
    rl.close()
  }
})