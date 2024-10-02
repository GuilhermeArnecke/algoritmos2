//Para fazer um For:
let i = 10
for (i = 0; i < 11; i++) {
  console.log(i)
}

//Também posso fazer o seguinte:
let listona = [10,2,5,12938,72,127]

for (let a = 0; a < listona.length; a++) {
  console.log(listona[a]+i)
}

//O i é uma variavel global por isso coloquei como exemplo

let vList = [ "banana", "maça", "pera", "laranja", "abacate"]

for (let i = 0; i < 5; i++) {
  console.log(vList[i])
}

for (const key in vList) {  //O for in pega exatamente o valor da posição (key)
  console.log(key)
}

for (const iterator of vList) { //O for of percorre a lista que está pedindo 
  console.log(iterator)         //e te entrega exatamente o valor que você pediu;
}