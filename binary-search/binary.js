// chat gpt code

function binarySearch(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1; // search right half
        } else {
            right = mid - 1; // search left half
        }
    }

    return -1; // not found
}

const numbers = [10, 20, 30, 40, 50];

console.log(binarySearch(numbers, 40)); // 3
console.log(binarySearch(numbers, 25)); // -1

