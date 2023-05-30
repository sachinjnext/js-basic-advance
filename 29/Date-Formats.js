const d = new Date("2015-03-25");
console.log(d);

const d1 = new Date("2015-03-25T12:00:00Z");
console.log(d1);

let msec = Date.parse("March 21, 2012");
const d2 = new Date(msec);
console.log(d2);