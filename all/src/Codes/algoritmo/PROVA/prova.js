let notas = [3.4, 7.1, 6.4, 8.2];
let media = 0, count = 0;
for (i = 0; i < notas.length; i++) {
  media = media + notas[i]
  count = count + 1
  console.log(notas[i])
}
let result = media / count;
console.log(`MEDIA = ${result.toFixed(2)}`);