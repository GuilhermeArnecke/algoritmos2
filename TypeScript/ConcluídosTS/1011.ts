//Atividade 1011
import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const pi: number = 3.14159
const input: number[] = []

rl.on('line', (line) => {
  input.push(parseFloat(line))
  let R = parseFloat(line)
  let result: number = (((4/3) * pi) * (R * R * R))
  console.log(`VOLUME = ${result.toFixed(3)}`)
  rl.close()
})