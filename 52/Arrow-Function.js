let greet = (name, age) => {
  return 'Sachin ' + name + ' ' + age;
};
console.log(greet("your age is", 20)); // Sachin your age is 20


const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // Output: 6


const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]


const person = {
  name: 'Jane',
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`); // Arrow function maintains the context of the surrounding scope
    }, 1000);
  }
};
person.greet(); // Output: Hello, Jane!


const add = (a, b) => {
  const sum = a + b;
  return sum;
};
console.log(add(2, 3)); // Output: 5
