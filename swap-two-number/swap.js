
// first approach 
// let a = 5;
// let b = 10;

// let temp = a;
// a = b;
// b = temp;

// console.log(a, b); // 10 5

// secons apporach
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a, b); // 10 5
