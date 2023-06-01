let greet = (name, age) => {
    return 'Sachin ' + name + ' ' + age;
};
console.log(greet("your age is", 20));

const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // Output: 6

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]


const person = {
  name: 'Jane',
  greet: function() {
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



const numbers1 = [1, 2, 3, 4, 5];
const sum = numbers1.reduce((acc, curr) => acc + curr, 0); // This uses the arrow function in the reduce method
console.log(sum);

const person1 = {
  name: 'John',
  hobbies: ['reading', 'cooking', 'coding'],
  showHobbies() {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`); // Arrow function maintains the context of the surrounding scope, so 'this.name' will refer to the person object
    });
  }
};
person1.showHobbies();

const add1 = (...nums) => nums.reduce((acc, curr) => acc + curr, 0); // This uses the arrow function with the rest parameter
console.log(add1(1, 2, 3, 4, 5));

