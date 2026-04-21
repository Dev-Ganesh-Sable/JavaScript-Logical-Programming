
function reverseNumber(num) {
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;              // get last digit
        reversed = reversed * 10 + digit;  // build reversed number
        num = Math.floor(num / 10);        // remove last digit
    }

    return reversed;
}

console.log(reverseNumber(5678)); 