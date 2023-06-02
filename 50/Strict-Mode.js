"use strict";

function example() {
  x = 10; // This will throw a ReferenceError in strict mode let, const, var
}
example();


function myFunction() {
  delete Object.prototype; // This will throw a TypeError: Cannot delete property 'prototype' of function Object()
}



function sum(a, a, b) { // This will throw a SyntaxError: Duplicate parameter name not allowed in this context
  return a + a + b;
}


var eval = 10; // This will throw a SyntaxError: Unexpected eval keyword



function test() {
  this.message = 'Strict mode example';
  return this;
}
console.log(test()); // This will log the object with the 'message' property in string




function doSomething() {
  var x = 10;
  with (Math) { // This will throw a SyntaxError: Strict mode code may not include a with statement
    console.log(sqrt(x));
  }
}
doSomething();


