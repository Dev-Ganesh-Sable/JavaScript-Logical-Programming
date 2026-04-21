
let number = 153;       // following armstrong number : 153,370,371,407

function isArmstrong(num) {
    let original = num;
    let sum = 0;
    let digits = num.toString().length;

    while (num > 0) {
        let digit = num % 10;
        sum += Math.pow(digit, digits);
        num = Math.floor(num / 10);
    }

    return sum === original;
}

if (isArmstrong(number)) {
    console.log("Armstrong Number");
} else {
    console.log("Not Armstrong Number");
}