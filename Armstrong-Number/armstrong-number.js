
// armstrong number => 153 => 1*1*1 + 5*5*5 + 3*3*3 
// armtrong number => 153  => 1^3 + 5^3 + 3^3

isArmstrong = (number) => {
    let numOfDigit = number.toString().length;
    let temp = number;
    let sum = 0;

    while (temp > 0) {
        let remainder = temp % 10     // 3 :  get last digit of number
        temp = Math.floor(temp / 10)  // 153/10 : 15.3 = 15 
        sum = sum + Math.pow(remainder, numOfDigit)  // 3^3
    }
    console.log(`value of sum is ${sum}`);

    if (number === sum) {
        return true
    }
    else {
        return false
    }
}
console.log(`isArmstrong number : ${isArmstrong(153)}`);



// another example code 
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


