const person = {
    name: 'John',
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

person.sayHello(); // 'this' refers to the 'person' object



const calculator = {
  total: 0,
  add: function(num) {
    this.total += num;
    return this;
  },
  subtract: (num) => {
    this.total -= num; // 'this' is not bound to the calculator object, so this.total will be undefined
    return this;
  },
  getTotal: function() {
    return this.total;
  }
};
console.log(calculator.add(5).subtract(3).getTotal());



function Car(make, model) {
  this.make = make;
  this.model = model;
  this.displayCarInfo = () => {
    console.log(`Make: ${this.make}, Model: ${this.model}`); // Arrow function does not bind 'this' to the Car object, so 'this.make' and 'this.model' will be undefined
  };
}
const car1 = new Car('Toyota', 'Camry');
car1.displayCarInfo();



const button = document.querySelector('#myButton');
button.addEventListener('click', () => {
  console.log(this); // 'this' will be the Window object instead of the button element, as arrow functions do not bind their own 'this'
});



const personT = {
  name: 'Jane',
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`); // Arrow function maintains the context of the surrounding scope, so 'this.name' will be 'Jane'
    }, 1000);
  }
};
personT.greet();