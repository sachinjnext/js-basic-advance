let text = "Please locate where 'locate' occurs!";

let index = text.indexOf("locate");
console.log(index);

let lastIndex = text.lastIndexOf("locate");
console.log(lastIndex);
text.search("locate");

let stringEx = "Hello world, welcome to the universe.";
stringEx.includes("world", 12);
console.log(stringEx);

var strExample = "The rain in SPAIN stays mainly in the plain";
console.log("match output" + " = " + strExample.match(/ain/g));

var text1 = "The rain in SPAIN stays mainly in the plain";
console.log("match output" + " = " + text1.match(/ain/gi));

var text2 = "hello my name is sachin ";
console.log(text2.includes("sachin"));

var text3 = "Hello world, welcome to the universe."
console.log(text3.startsWith("welcome"));