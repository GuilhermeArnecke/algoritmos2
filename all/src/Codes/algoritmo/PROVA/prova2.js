let notaA1 = 5
let notaA2 = 8
let beecrowd = 10
let calcMedia = (notaA1 + notaA2) / 2, mediaProva = calcMedia * 0.60;
let mediaBeecrowd = beecrowd * 0.40
let notaFinal = mediaProva + mediaBeecrowd
if (notaFinal >= 7.5) {
  console.log(`MEDIA = ${notaFinal.toFixed(2)}\nALUNO APROVADO`)
} else if (notaFinal < 4) {
  console.log(`MEDIA = ${notaFinal.toFixed(2)}\nALUNO REPROVADO`)
} else {
  console.log(`MEDIA = ${notaFinal.toFixed(2)}\nALUNO EM EXAME`)
}