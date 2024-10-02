//Atividade 1172
let input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
let lines = input.split('\n');

let values = [] = lines.map(Number);
for (i = 0; i < 10; i++) {
  if (values[i] <= 0) {
    values[i] = 1
    console.log(`X[${i}] = ${values[i]}`)
  } else {
    console.log(`X[${i}] = ${values[i]}`)
  }
}