//Atividade 1026
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.trim().split('\n');

lines.forEach(line => {
  if (line.trim() !== '') { 
      const [a, b] = line.split(' ').map((x) => BigInt(x)); 
      const result = (a ^ b).toString();
      console.log(result);
  }
})