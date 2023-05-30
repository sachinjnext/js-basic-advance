let firstName = "John";
let lastNames = "Doe";
let fullName = `Welcome ${firstName}, ${lastNames}!`;
console.log(fullName);

let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);