// Pyramid Pattern

let n = 4;

for (let i = 1; i <= n; i++) {
  let row = "";

  // spaces
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }

  // stars
  for (let k = 1; k <= i; k++) {
    row += "* ";
  }

  console.log(row);
}