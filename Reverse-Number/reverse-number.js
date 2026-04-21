
let number = 123;

function reverseNumber() {
    let reverse = 0;

    while (number > 0) {
        let temp = number % 10    // get last digit of number
        number = Math.floor(number / 10) // 0
        reverse = reverse * 10 + temp  // 321
    }
    return reverse
}
console.log(`reverse of number ${number} is ${reverseNumber(number)}`)


// another example
function reverseNum(num) {
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;              // get last digit
        reversed = reversed * 10 + digit;  // build reversed number
        num = Math.floor(num / 10);        // remove last digit
    }

    return reversed;
}

console.log(reverseNum(5678)); 