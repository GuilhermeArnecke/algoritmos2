// Atividade 1101
let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    let [m,n] = lines[i].split(' ').map(Number)

    if (m <= 0 || n <=0) {
        break;
    }

    if (m > n) {
        [m,n] = [n,m];
    }

    let soma = 0;
    let sequencia = '';

    for (let j = m; j <= n; j++) {
        sequencia += j + ' ';
        soma += j;
    }
    console.log(`${sequencia}Sum=${soma}`);
}
