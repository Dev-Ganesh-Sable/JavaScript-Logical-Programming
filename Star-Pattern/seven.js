// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

// let n = 5

// for (let i = 1; i <= n; i++) {

//     let str = "";

//     for (let j = 1; j <= n; j++) {

//         str += j + " "
//     };

//     console.log(str);
// };

// let n = 4
// for (let i = 1; i <= n; i++) {

//     let str = "";

//     for (let j = 1; j <= i; j++) {
//         str += j + " ";
//     }

//     console.log(str);
// };

// print star in one line

// let n = 5

// for (let i = 1; i <= n; i++) {

//     let row = ""

//     for (let j = 1; j <= n; j++) {
//         row += "* "
//     }
//     console.log(row);
// }

// 123
// 456
// 789

// let n = 3
// let count = 1
// for (let i = 1; i <= n; i++) {
//     str = ""
//     for (let j = 1; j <= n; j++) {
//         str += count + " "
//         count++
//     }
//     console.log(str.trim());
// };


// let n = 3

// for (let i = 1; i <= n; i++) {
//     let str = ""
//     for (let j = 1; j <= i; j++) {
//         str += "* "
//     }
//     console.log(str);
// };


// star pattern 
// *
// **
// ***

// let n = 3

// for (let i = 1; i <= n; i++) {
//     let str = ""
//     for (let j = 1; j <= i; j++){
//         str += "* "
//     }
//     console.log(str);
// };


// let n = 6

// for (let i = 1; i <= n; i++) {
//     let str = ""
//     for (let j = 1; j <= i; j++){
//         str += "* "
//     }
//     console.log(str);
// };

// let n = 4

// for (let i = 0; i <= n; i++) {
//     str = ""
//     for (let j = 0; j < i + 1; j++) {
//         str += i + 1
//     }
//     console.log(str);
// } 


let n = 4

for (let i = 0; i <= n; i++) {
    let str = ""

    for (let j = 1; j <= i + 1; j++) {
        str += j + ""
    }
    console.log(str);
};