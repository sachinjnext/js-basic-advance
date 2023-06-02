const person = {
  name: 'John',
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}.`);
  }
};
person.sayHello(); // 'this' refers to the 'person' object


function Car(make, model) {
  this.make = make;
  this.model = model;
  this.displayCarInfo = () => {
    console.log(`Make: ${this.make}, Model: ${this.model}`); // Arrow function does not bind 'this' to the Car object, so 'this.make' and 'this.model' will be undefined
  };
}
const car1 = new Car('Toyota', 'Camry');
car1.displayCarInfo();


const personT = {
  name: 'Jane',
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`); // Arrow function maintains the context of the surrounding scope, so 'this.name' will be 'Jane'
    }, 1000);
  }
};
personT.greet();