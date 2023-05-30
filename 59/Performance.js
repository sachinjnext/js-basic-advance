// Reduce Activity in Loops
for (let i = 0; i < arr.length; i++) { } // Bad code

let l = arr.length;
for (let i = 0; i < l; i++) { } // batter code


// Avoid Unnecessary Variables
let fullName = firstName + " " + lastName;
console.log(fullName);

console.log(firstName + " " + lastName); // Batter code