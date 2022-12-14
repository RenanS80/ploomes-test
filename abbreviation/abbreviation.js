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
 * Complete the 'abbreviation' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function abbreviation(a, b) {
    let abbr = "";
    let initial = 0;

    for (let i = 0; i < a.length; i++) {

        if (initial <= b.length && a[i].toUpperCase() === b[initial]) {
            abbr = abbr.concat(a[i].toUpperCase());
            initial++;
        } 

        else if (a[i] === a[i].toUpperCase() && a[i] !== abbr[abbr.length - 1]) {
            return 'NO';
        }
    }

    return (abbr !== b) ? 'NO' : 'YES';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const a = readLine();

        const b = readLine();

        const result = abbreviation(a, b);

        ws.write(result + '\n');
    }

    ws.end();
}
