let codLanche = 107
let qtde = 6
let valor = 0, vTotal = 0

switch (codLanche) {
  case 100:
    valor = 12.00
    break

  case 101:
    valor = 15.30
    break
  
  case 102:
    valor = 4.50
    break
  
  case 103:
    valor = 6.00
    break
  
  case 104:
    valor = 5.50
    break

  case 105:
    valor = 10.00
    break

  case 106:
    valor = 11.00
    break

  case 107:
    valor = 5.00
    break

    
  case 108:
    valor = 2.50
    break

  case 109:
    valor = 8.00
    break
}

for (i = 0; i <= qtde; i++) {
  vTotal = valor * i
}
console.log(`R$ ${vTotal.toFixed(2)}`)