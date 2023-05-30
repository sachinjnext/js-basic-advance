let x = 123;
console.log(x.toString() + " " + (123).toString() + " " + (100 + 23).toString());


let y = 9.656;
console.log(x.toFixed(0) + " " +
    x.toFixed(2) + " " +
    x.toFixed(4) + " " +
    x.toFixed(6));

console.log(Number(true) + " " +
    Number(false) + " " +
    Number("10") + " " +
    Number("  10") + " " +
    Number("10  ") + " " +
    Number(" 10  ") + " " +
    Number("10.33") + " " +
    Number("10,33") + " " +
    Number("10 33") + " " +
    Number("John"));

console.log(parseInt("-10") + " " +
    parseInt("-10.33") + " " +
    parseInt("10") + " " +
    parseInt("10.33") + " " +
    parseInt("10 6") + " " +
    parseInt("10 years") + " " +
    parseInt("years 10"));


let a = Number.MAX_VALUE;

console.log(a);


let b = Number.MIN_VALUE;
console.log(b);
