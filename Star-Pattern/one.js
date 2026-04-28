
let row = 5;
let str = "";

for (let i = 1; i <= row; i++) {  // outer loop controls for rows

    // inner loop controls for cols
    for (let j = 1; j <= i; j++) {
        str = str + "*";
    }
    str = str + "\n";
}
console.log(str);
