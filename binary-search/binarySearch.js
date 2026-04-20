
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let n = arr.length

let key = 9

function binarySearch(arr, n, key) {

    // logic

    let mid = 0
    let low = 0, high = n - 1

    // while
    while (high >= n) {
        mid = Math.floor((high + low) / 2);

        if (key == arr[mid]) {
            return mid
        }
        else if (key < arr[mid]) {
            high = mid - 1
        }
        else {
            low = mid + 1
        }
    }
}

result = binarySearch(arr, n, key)

if (result != -1) {
    console.log(`key found ${key}`);
} else {
    console.log(`key not found ${key}`);
}