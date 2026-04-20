function findLargest(arr) {
    
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

const numbers = [10, 45, 23, 67, 12,100];
let ganesh=findLargest(numbers)
console.log(ganesh); // 100 