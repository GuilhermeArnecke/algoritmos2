let inicial = 3
let maximo = 1000
let decrem = 2
let aux = 0
while (inicial < maximo) {
  inicial += inicial - decrem
  aux += 1
}
console.log(aux)
