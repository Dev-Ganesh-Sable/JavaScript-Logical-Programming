
// anagram : Two strings are anagrams if they contain the same characters with the same frequency, but in a different order

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let obj = {};

    for (let char of str1) {
        obj[char] = (obj[char] || 0) + 1;
    }

    // console.log(obj["m"]);
    for (let char of str2) {
        if (!obj[char]) {
            return false;
        }
        obj[char]--;
    }

    return true;
}

console.log(isAnagram("listen", "silent"));