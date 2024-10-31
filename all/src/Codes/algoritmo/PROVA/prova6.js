let sexo = 'M'
let altura = 1.78
let corpo = 0

if (sexo === 'M') {
  corpo = (72.7 * altura) - 58
  console.log(`Peso ideal: ${corpo.toFixed(2)}`)
} else if (sexo === 'F') {
  corpo = (62.1 * altura) - 44.7
  console.log(`Peso ideal: ${corpo.toFixed(2)}`)
}