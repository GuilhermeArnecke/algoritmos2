//Atividade 1189
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

 let operation = lines.shift();
 let positions = [];
 let value = 0;
 let m = 1;
 for (i = 1; i < 11; i++) {
    value = i * 12;
    if (i <= 5) {
      for (j = 0; j < i; j++) {
        positions.push(value + j);
      }
    } else {
      for (j = 0; j < i - m; j++) {
        positions.push(value + j);
      }
      m += 2;
    }
 }


 let sum = 0;
 let count = 0;
 
 for (i = 0; i < 144; i++) {
     let num = parseFloat(lines.shift());
     if (positions.indexOf(i)!=-1) {
         sum += num;
         count++;
     }
 }
 
 if (operation == 'S') {
    console.log(sum.toFixed(1));
 } else {
    console.log((sum/count).toFixed(1));
 }