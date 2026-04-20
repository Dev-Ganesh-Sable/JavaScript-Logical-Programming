
function countVC(str) {
  const vowels = (str.match(/[aeiou]/gi) || []).length;
  const consonants = (str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;

  return { vowels, consonants };
}

console.log(countVC("JavaScript"));