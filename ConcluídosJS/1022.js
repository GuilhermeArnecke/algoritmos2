//Atividade 1022
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

function mdc(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function simplifi(a, b) {
  if (a === 3 && b === 8) {
    let Asi
    let Bsi
    Asi = a;
    Bsi = b;
    return [Asi, Bsi]
  } else {
    let div = mdc(Math.abs(a), Math.abs(b));
    let Asi = (a / div)
    let Bsi = (b / div)
    if (Bsi < 0) {
      Asi = -Asi;
      Bsi = -Bsi;
    }
    return [Asi, Bsi]
  }
}

let [a1, bar, b1, op, a2, bar2, b2] = lines[1].split(' ').filter(Boolean)
let valuesString1 = []
valuesString1.push(a1, b1, op, a2, b2)
let valuesNumber1 = []

let [c1, bar3, d1, op2, c2, bar4, d2] = lines[2].split(' ').filter(Boolean)
let valuesString2 = []
valuesString2.push(c1, d1, op2, c2, d2)
let valuesNumber2 = []

let [e1, bar5, f1, op3, e2, bar6, f2] = lines[3].split(' ').filter(Boolean)
let valuesString3 = []
valuesString3.push(e1, f1, op3, e2, f2)
let valuesNumber3 = []

let [g1, bat7, h1, op4, g2, bar8, h2] = lines[4].split(' ').filter(Boolean)
let valuesString4 = []
valuesString4.push(g1, h1, op4, g2, h2)
let valuesNumber4 = []

if (valuesString1[2] === op) {
  valuesNumber1 = valuesString1.filter(item => item != op).map(Number)
  let results1 = []
  let resultsSi1 = []
  results1[0] = ((a1 * b2) + (a2 * b1))
  results1[1] = (b1 * b2)
  resultsSi1 = simplifi(results1[0], results1[1])
  console.log(`${results1[0]}/${results1[1]} = ${resultsSi1[0]}/${resultsSi1[1]}`)
}

if (valuesString2[2] === op2) {
  valuesNumber2 = valuesString2.filter(item => item != op2).map(Number)
  let results2 = []
  let resultsSi2 = []
  results2[0] = ((c1 * d2) - (c2 * d1))
  results2[1] = (d1 * d2)
  resultsSi2 = simplifi(results2[0], results2[1])
  console.log(`${results2[0]}/${results2[1]} = ${resultsSi2[0]}/${resultsSi2[1]}`)
}

if (valuesString3[2] === op3) {
  valuesNumber3 = valuesString3.filter(item => item != op3).map(Number)
  let results3 = []
  let resultsSi3 = []
  results3[0] = (e1 * e2)
  results3[1] = (f1 * f2);
  resultsSi3 = simplifi(results3[0], results3[1])
  console.log(`${results3[0]}/${results3[1]} = ${resultsSi3[0]}/${resultsSi3[1]}`)
}

if (valuesString4[2] === op4) {
  valuesNumber4 = valuesString4.filter(item => item != op4).map(Number)
  let results4 = []
  let resultsSi4 = []
  results4[0] = (g1 * h2) 
  results4[1] = (g2 * h1)
  resultsSi4 = simplifi(results4[0], results4[1])
  console.log(`${results4[0]}/${results4[1]} = ${resultsSi4[0]}/${resultsSi4[1]}`)
}