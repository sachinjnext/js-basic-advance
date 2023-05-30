const person = {
    name: 'John',
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

person.sayHello(); // 'this' refers to the 'person' object