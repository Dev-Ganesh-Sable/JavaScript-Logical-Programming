
// approch 01

factorial = (number) => {
    if (number === 1) {
        return 1
    }
    return number * factorial(number - 1);
}
console.log(`factoral of number 3 is ${factorial(3)}`);
console.log(`factoral of number 4 is ${factorial(4)}`);

// approch 02 
// using loop

function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
}

console.log(factorial(5));
