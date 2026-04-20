const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [];

for (let i = 0; i < arr1.length; i++) {
  merged.push(arr1[i]);
}

for (let i = 0; i < arr2.length; i++) {
  merged.push(arr2[i]);
}

console.log(merged);
// [1, 2, 3, 4]