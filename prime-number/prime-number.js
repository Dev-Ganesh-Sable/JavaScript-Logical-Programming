
function isPrime(num) {
    if (num <= 1) 
        return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return `number is not prime number`;
        }
    }
    return `number is prime number`;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false



