
function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        
        let key = arr[i];      // element to be inserted

        let j = i - 1;

        // Move elements greater than key one position ahead

        while (j >= 0 && arr[j] > key) {

            arr[j + 1] = arr[j];

            j--;
        }

        arr[j + 1] = key; // place key at correct position
    }

    return arr;
}


let arr = [80,60,40,20];
console.log(insertionSort(arr));