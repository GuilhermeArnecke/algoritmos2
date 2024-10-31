//Atividade 1002
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})  

let input: number[] = [];
const pi: number = 3.14159;
let quadrado: number;
let resp: number;

rl.on('line', (line) => {
  input.push(parseFloat(line));
  if (input.length === 1) {
    const raio = input[0]
    quadrado = raio * raio
    resp = pi * quadrado
    console.log(`A=${resp.toFixed(4)}`)
    rl.close();
  }
})