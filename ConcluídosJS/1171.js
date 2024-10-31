//Atividade 1171
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let count = +lines.shift()
let numbers = []
let numbersOrdenated = []
let numbersVerification = []
let countNumbers = []

for (i = 0; i < count; i++) {
  numbers[i] = +lines.shift()
}
numbersOrdenated = numbers.sort((a, b) => a - b)

for (i = 0; i < count; i++) {
  if (numbersVerification.includes(numbersOrdenated[i])) {
    countNumbers[numbersOrdenated[i]] += 1
  } else {
    numbersVerification.push(numbersOrdenated[i]);
    countNumbers[numbersOrdenated[i]] = 1
  }
}
countNumbers = countNumbers.filter(item => item !== undefined);
for (i = 0; i < numbersVerification.length; i++) {
  console.log(`${numbersVerification[i]} aparece ${countNumbers[i]} vez(es)`)
}
  
