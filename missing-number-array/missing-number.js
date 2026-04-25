
const arr = [1, 2, 3, 6, 8, 10];

// find min and max number 
let min = Math.min(...arr);
let max = Math.max(...arr);

// push missing number in array
let missingNumber = [];

for (let i = min; i <= max; i++) {

    let miss = arr.includes(i);

    if (!miss) {
        missingNumber.push(i)
    }
}
console.log("missing number : ", missingNumber);
