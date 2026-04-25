
function sum(num) {
  num = Math.abs(num); // handle negative numbers
  let sum = 0;

  while (num > 0) {
    sum += num % 10;          // get last digit
    num = Math.floor(num / 10); // remove last digit
  }

  return sum;
}

console.log(sum(1234)); // 10