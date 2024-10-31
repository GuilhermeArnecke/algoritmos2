//Atividade 1005
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Digite a primeira nota (A):', (inputA) => {
  const A = parseFloat(inputA);

  rl.question('Digite a segunda nota (B)', (inputB) => {
    const B = parseFloat(inputB);

    const media = (3.5 * A + 7.5 * B) / 11;
    console.log(`MEDIA = ${media.toFixed(5)}`)

    rl.close();
  });
});
