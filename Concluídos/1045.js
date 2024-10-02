//Atividade 1045
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split(' '); 

const takeValues = (line) => line.map(Number);

let lados =takeValues(lines) 
lados.sort((a, b) => b - a);


let [A, B, C] = lados;

let Ael = Math.pow(A, 2), Bel = Math.pow(B, 2), Cel = Math.pow(C, 2), resultados = [];
if (A >= (B + C)) {
  return console.log('NAO FORMA TRIANGULO')
} else {
  if (Ael === Bel + Cel) resultados.push('TRIANGULO RETANGULO')
  if (Ael > Bel + Cel) resultados.push('TRIANGULO OBTUSANGULO')
  if (Ael < Bel + Cel) resultados.push('TRIANGULO ACUTANGULO')
  if (A === B && A === C) resultados.push('TRIANGULO EQUILATERO')
  if (A === B && A !== C || A === C && A !== B || B === A && B !== C || B === C && B !== A || C === A && C !== B || C === B && C !== A) resultados.push('TRIANGULO ISOSCELES')
  resultados.forEach(resultados => console.log(resultados));
}

/* O argumento lados.sort((a, b) => b - a); em JavaScript é usado para ordenar um array chamado lados em ordem decrescente. 
Vamos detalhar como isso funciona:

Método sort: O método sort é usado para ordenar os elementos de um array. 
Por padrão, ele ordena os elementos como strings em ordem alfabética. 
No entanto, você pode fornecer uma função de comparação personalizada para definir a ordem de classificação.

Função de Comparação: A função (a, b) => b - a é uma função de comparação. 
Ela recebe dois argumentos, a e b, que representam dois elementos do array que estão sendo comparados.

Comparação: Dentro da função de comparação, a expressão b - a é avaliada:
Se o resultado for negativo, a será classificado antes de b.
Se o resultado for zero, a posição de a e b não será alterada.
Se o resultado for positivo, a será classificado depois de b.

Ordem Decrescente: Como estamos subtraindo a de b (b - a), os elementos maiores serão classificados antes dos menores, resultando em uma ordem decrescente. */