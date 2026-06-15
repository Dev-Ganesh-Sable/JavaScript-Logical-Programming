// Using Math.max()

// const numbers = [10, 45, 23, 67, 12, 100];

// const largest = Math.max(...numbers);

// console.log(largest); // 100


// using reduce method

const arr = [10, 25, 5, 40, 15];

const largest = arr.reduce((max, current) => {
    return current > max ? current : max;
});

console.log(largest);