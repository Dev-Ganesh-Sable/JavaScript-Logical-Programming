
// let arr1 = [1, 2, 3, 4]
// let arr2 = [5, 6, 7, 8]

// // first method : using spread operator
// let arr3 = [...arr1, ...arr2]
// console.log(arr3);
// -----------------------------------------------------------------------

// second method : using concat method

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const merged = arr1.concat(arr2);

// console.log(merged);
// // [1, 2, 3, 4, 5, 6]
// -----------------------------------------------------------------------------

// third method : push method

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// arr1.push(...arr2);

// console.log(arr1);
// // [1, 2, 3, 4, 5, 6]
// --------------------------------------------------------------------------------

// forth method : marge and removing duplicates

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5, 5, 3, 2];

const merged = [...new Set([...arr1, ...arr2])];

console.log(merged);
// [1, 2, 3, 4, 5]