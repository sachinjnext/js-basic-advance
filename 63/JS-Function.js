let text = "Outside: " + typeof carName;
console.log(text);

function myFunction() {
    let carName = "Volvo";
    let text = "Inside: " + typeof carName + " " + carName;
    console.log(text);
}

myFunction();