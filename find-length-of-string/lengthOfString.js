
// simple way
function checkString(str) {
    if (str.length === 0) {
        console.log("String is empty");
    } else {
        console.log("Length:", str.length);
    }
}

checkString("Siddhi"); // Length: 6


// short hand method
const str = "Ganesh";

console.log(str ? str.length : "String is empty");
