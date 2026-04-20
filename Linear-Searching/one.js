
let arr = [10, 20, 30, 40, 50, 60, 70];

const linearSearch = (array, toBeSearched) => {
    for (i = 0; i <= array.length; i++) {
        if (array[i] == toBeSearched) {
            console.log(`element found ${i}`);
        }
    }
}
linearSearch(arr, 7);