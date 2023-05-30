// JS Operators - Arithmetic, Assignment, Comparison, String, Logical, Bitwise, & Ternary.

// Assignment
let a = 10;
console.log(a);

// Arithmetic
let x = 5;
let y = 2;
let z = x + y;

// Comparison
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log(result);

// String
let text3 = "John";
let text4 = "Doe";
let text5 = text3 + " " + text4;
console.log(text5);

// Logical
let p = 6;
let q = 3;
console.log((x < 10 && y > 1) + " " + (x < 10 && y < 1));

// Bitwise
console.log(5 & 1);

// Conditional (Ternary) Operator
function myFunction() {
    var s = 12;
    var voteable = (s < 18) ? "Too young" : "Old enough";
    console.log(voteable + " to vote.");
}
myFunction()