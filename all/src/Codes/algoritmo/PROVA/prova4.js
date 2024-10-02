let senioridade = 1
let tempoProjeto = 120
let value = Number, resp = Number
switch (senioridade) {
  case 1:
    value = 1.99
    resp = tempoProjeto * value
    console.log(`R$ Orçamento: ${resp.toFixed(2)}`)
    break
  case 2:
    value = 8.50
    resp = tempoProjeto * value
    console.log(`R$ Orçamento: ${resp.toFixed(2)}`)
    break
  case 3:
    value = 12.50
    resp = tempoProjeto * value
    console.log(`R$ Orçamento: ${resp.toFixed(2)}`)
    break
  case 4:
    value = 19.99
    resp = tempoProjeto * value
    console.log(`R$ Orçamento: ${resp.toFixed(2)}`)
    break
  case 5:
    value = 25.75
    resp = tempoProjeto * value
    console.log(`R$ Orçamento: ${resp.toFixed(2)}`)
    break
  default:
    console.log(`NÃO CONSTA NA TABELA`)
}
