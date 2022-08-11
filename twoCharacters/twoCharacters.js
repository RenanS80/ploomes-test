'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s){
    
    // Seleciona caracteres unicos da string (s) e os armazena num array
    let uniqueChar = Array.from(new Set(s));

    // Converte a string (s) em array
    let strArray = Array.from(s);
    let longestValid = 0;

    // Caso nenhuma string possa ser formada
    if(s.length === 1){
        return 0;
    }

    for(let i = 0; i < uniqueChar.length; i++) {
        let char1 = uniqueChar[i];
        
        for(let j = 0; j < uniqueChar.length; j++) {
            let char2 = uniqueChar[j];

            // Filtra strings formadas por dois caracteres  
            let filterChar = strArray.filter(originalChar => originalChar === char1 || originalChar === char2).join('');

            // Verifica strings validas (rejeita duas strings iguais consecutivas)
            if(filterChar.indexOf(char1+char1) === -1 && filterChar.indexOf(char2+char2) === -1) {
                
                longestValid < filterChar.length ? longestValid = filterChar.length : ''
            }
        }
    }

    return longestValid; 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}