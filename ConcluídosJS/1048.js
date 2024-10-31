//Atividade 1048
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let baseSalary = +lines.shift()
let newSalary = Number()
let readjustment = Number()
let percentage = Number()

if (baseSalary <= 400.00) {
  percentage = 15
  readjustment = baseSalary * 0.15
  newSalary = baseSalary + readjustment
} else if (baseSalary > 400.00 && baseSalary <= 800.00) {
  percentage = 12
  readjustment = baseSalary * 0.12
  newSalary = baseSalary + readjustment
} else if (baseSalary > 800.00 && baseSalary <= 1200.00) {
  percentage = 10
  readjustment = baseSalary * 0.10
  newSalary = baseSalary + readjustment
} else if (baseSalary > 1200.00 && baseSalary <= 2000.00) {
  percentage = 7
  readjustment = baseSalary * 0.07
  newSalary = baseSalary + readjustment
} else {
  percentage = 4
  readjustment = baseSalary * 0.04
  newSalary = baseSalary + readjustment
}
console.log(`Novo salario: ${newSalary.toFixed(2)}\nReajuste ganho: ${readjustment.toFixed(2)}\nEm percentual: ${percentage} %`)