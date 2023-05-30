let text = "";
for (let i = 0; i < 5; i++) {
    if (i === 3) { break; } // continue - remove only 3
    text += "The number is " + i + " ";
}
console.log(text);
