//Atividade 1012
import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const pi: number = 3.14159
const input: number[] = []

rl.on('line', (line) => {
  input.push(parseFloat(line))
  if (input.length === 2) {
    let trian: number = ((input[0] * input[2]) / 2)
    console.log(`TRIANGULO: ${trian.toFixed(3)}`)
    let circ: number = (input[2] * pi)
    console.log(`CIRCULO: ${circ.toFixed(3)}`)
    let trap: number = (((input[0] + input[1]) * input[2]) / 2)
    console.log(`TRAPEZIO: ${trap.toFixed(3)}`)
    let quad: number = (input[1] * input[1])
    console.log(`QUADRADO: ${quad}`)
    let retan: number = (input[0] * input[1])
    console.log(`RETANGULO: ${retan.toFixed(3)}`)
    rl.close()
  }
})