
let str="my name is ganesh"

// regex

let regexForVowels=/[aeiou]/gi
let regexForConsonant=/[^aeiou\s]/gi     //  \s : use for remove white space in string

console.log(`vowels count : ${str.match(regexForVowels).length}`);
console.log(`consonant count : ${str.match(regexForConsonant).length}`);    