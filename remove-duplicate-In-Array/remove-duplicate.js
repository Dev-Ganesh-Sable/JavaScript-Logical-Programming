
// // use built in method
// let arr = [1, 2, 2, 3, 4, 4, 5];

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// console.log(removeDuplicates(arr)); 
// output : [1, 2, 3, 4, 5]


//  using loop
let arr = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}
console.log(removeDuplicates(arr)); 


