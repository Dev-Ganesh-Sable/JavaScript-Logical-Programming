
function countVowelsAndConsonants(str) {
  let vowels = 0;
  let consonants = 0;

  str = str.toLowerCase();

  for (let char of str) {
    if (char >= 'a' && char <= 'z') { // check if it's a letter
      if ('aeiou'.includes(char)) {
        vowels++;
      }
       else {
        consonants++;
      }
    }
  }

  return { vowels, consonants };
}

const result = countVowelsAndConsonants("my name is ganesh");

console.log(result); 
// { vowels: 5, consonants: 9 }