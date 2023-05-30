let language = "JavaScript";
let text = " ";
for (let x of language) {
    text += x;
}
console.log(text);


// Loop forEach
const numbers = [45, 4, 9, 16, 25, 50];
let sam = "";
numbers.forEach(myFunctions);
function myFunctions(value1) {
    sam += value1 + " ";
}
console.log(sam);