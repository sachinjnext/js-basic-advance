// Comparisons :- ==, ===, !=, !==, >, <, >=, <=
let age = 15;
let voteable = (age < 18) ? "Too young" : "Old enough";
console.log(voteable + " to vote.");

const car = { type: "Fiat", model: "500", color: "white" };
let name = car?.type;
console.log(name);