let num = 1;
try {
    num.toPrecision(500);
}
catch (err) {
    console.log(err.name);
}

let x = 5;
try {
    x = y + 1;
}
catch (err) {
    console.log(err.name);
}

try {
    eval("alert('Hello)");
}
catch (err) {
    console.log(err.name);
}

let num1 = 1;
try {
    num1.toUpperCase();
}
catch (err) {
    console.log(err.name);
}

try {
    decodeURI("%%%");
}
catch (err) {
    console.log(err.name);
}