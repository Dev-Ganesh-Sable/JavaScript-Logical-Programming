
// fibonaccie series : The Fibonacci series in JavaScript is a sequence of numbers where each number is the sum of the previous two numbers.

// first approch

let n1 = 0, n2 = 1

console.log(n1);
console.log(n2);

for (let i = 3; i <= 10; i++) {
    let n3 = n1 + n2  // 0+1
    console.log(n3);
    n1 = n2;         // 1
    n2 = n3          // 1
}
// -------------------------------------------------------------------------------------------------------------

// second approch

function fibonacci(n) {
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}

fibonacci(10);