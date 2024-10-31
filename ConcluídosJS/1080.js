//Atividade 1080
let input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
let lines = input.split("\n");

let moreLines = lines.map(Number);
let bigValue = Math.max(...moreLines)
let positionBigValue = moreLines.indexOf(bigValue)
let position = positionBigValue + 1
console.log(bigValue)
console.log(position)

//Math.max = pega o maior valor de um array
//indexOf = pega a posição de algo