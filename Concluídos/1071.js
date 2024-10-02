//Atividade 1071
let input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
let lines = input.split("\n");

let [x, y] = lines.map(a => +a)
if (x >= y) {
  [x,y] = [y,x]
}
let result = 0
for (i = x + 1; i < y; i++) {
  if (i % 2 !== 0) {
    result = result + i
  }
}
console.log(result)