let txt = "Apple, Banana, Kiwi";

let part = txt.slice(7, 13);
console.log("slice" + " = " + part);

let part2 = txt.slice(7);
console.log("slice" + " = " + part2);

let part3 = txt.slice(-12, -6);
console.log("slice" + " = " + part3);

let part4 = txt.substring(7, 13);
console.log("substring" + " = " + part4);

let part5 = txt.substr(7, 6);
console.log("substr" + " = " + part5);

let newText = txt.replace("Apple", "Orange");
console.log("replace" + " = " + newText);

let text = "I love cats. Cats are very easy to love. Cats are very popular."
replace1 = text.replaceAll("Cats", "Dogs");
replace2 = text.replaceAll("cats", "dogs");
console.log("replaceAll" + " = " + replace2);

let example = "Hello World!";
let show = example.toUpperCase();
console.log("toUpperCase" + " = " + show);

let show1 = example.toLowerCase();
console.log("toLowerCase" + " = " + show1);

let rankNum = "5";
let padded = rankNum.padStart(4, "x");
console.log("padStart" + " = " + padded);

let rankNum1 = "5";
let padded1 = rankNum1.padEnd(4, "0");
console.log("padEnd" + " = " + padded1);

let record = "a,b,c,d,e,f";
const myArray = record.split(",");
console.log("split" + " = " + myArray);