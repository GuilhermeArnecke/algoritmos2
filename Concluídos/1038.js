//Atividade 1038
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split(' ');

let item = {
  1 : 4,
  2 : 4.50,
  3 : 5,
  4 : 2,
  5 : 1.50
};
let [A, B] = lines.map(Number)

function selecionar(A, B) {
  let valor = item[A];
  if (valor !== undefined) {
    const total = (valor * B);
    return console.log(`Total: R$ ${total.toFixed(2)}`);
  };
};

selecionar(A, B);

/* Na linha 16 ele vai pegar e verificar se o valor existe, se ele não existir
ele vai dar o aviso de que não tem esse item no nosso objeto. */