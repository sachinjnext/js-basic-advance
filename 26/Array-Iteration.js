const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
console.log(txt);
function myFunction(value) {
    txt += value + "<br>";
}

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
console.log(numbers2);
function myFunction(value, index, array) {
    return value * 2;
}


const number = [45, 4, 9, 16, 25];
let sum = number.reduce(myFunction);
console.log("the sum is " + sum);
function myFunction(total, value, index, array) {
    return total + value;
}


const sas = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);
console.log("All over 18 is " + allOver18);
function myFunction(value, index, array) {
    return value > 18;
}


const axz = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);
console.log("Some over 18 is " + someOver18);
function myFunction(value, index, array) {
    return value > 18;
}


const fot = ["apple", "banana", "safarzan", "mengo"];
let position = fot.indexOf("apple") + 1;
console.log("apple is found in posistion  " + position);


const fruitss = ["Apple", "Orange", "Apple", "Mango"];
let ss = fruitss.lastIndexOf("Apple") + 1;
console.log("Apple is found in position " + ss);


const zaz = [4, 9, 16, 25, 29];
let first = zaz.find(myFunction);
console.log("First number over 18 is " + first);
function myFunction(value, index, array) {
    return value > 18;
}


const sc = ["kiwi", "mango", "apple"];
console.log(sc.includes("kiwi"));
