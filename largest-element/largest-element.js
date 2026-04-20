
let arr = [10, 45, 23, 89, 67,100];

function LargestElement(arr) {

    let largest = arr[0]; // assume first element is largest

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log(LargestElement(arr)); // largest element : 100