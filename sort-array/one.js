
function sortArray(arr) {
    let length = arr.length

    // for loop
    for (let i = 0; i < length - 1; i++) {

        // nested for loop
        for (let j = i + 1; j < length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    console.log(`sorted array : ${arr}`);
}

let arr = [5, 4, , 3, 2, 1]

console.log(`orignal array :${arr}`);

sortArray(arr);