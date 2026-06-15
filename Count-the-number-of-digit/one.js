function countDigits(num) {
    let count = 0;

    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }

    return count;
}

console.log(countDigits(12345));