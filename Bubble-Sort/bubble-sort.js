const arr = [13, 46, 24, 52, 20, 9];
console.log(sort(arr));


// function for bubble sort
function sort(arr) {

    // outer loop 
    for (let i = 0; i < arr.length; i++) {

        // inner loop 
        for (let j = 0; j < arr.length - 1; j++) {
            // swap
            if (arr[j] > arr[j + 1]) {

                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

