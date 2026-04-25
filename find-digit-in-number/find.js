
let num = -123;

let count = 0

// number is 0 so return 1
if (num === 0) {
    count = 1
}

num = Math.abs(num); // number is - format then return number in digit

while (num > 0) {
    num = Math.floor(num / 10);  // return last digit of number 
    count++
}

console.log(count);

