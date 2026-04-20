// first approch

// let checkPalindrome = (num) => {

//     let original = num.toString();
//     let reversed = original.split("").reverse().join()

//     if (original === reversed) {
//         console.log(original +" : is palindrome number");
//     } else {
//         console.log(original +" : is not palindrome number");
//     }
// }

// checkPalindrome(121);

// second approch

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("madam"));

// third approch 

function isPalindromeNumber(num) {
    let str = num.toString();
    return str === str.split('').reverse().join('');
}

console.log(isPalindromeNumber(121));

// forth approch

function isPalindromeNumber(num) {
    let str = num.toString();
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return str === reversed;
}

console.log(isPalindromeNumber(121));


