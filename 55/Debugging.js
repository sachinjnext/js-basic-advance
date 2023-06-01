g = 5;
j = 6;
k = g + j;
console.log(k);




function sum(a, b) {
    debugger; // Execution will pause here
    return a + b;
  }
  console.log(sum(2, 3)); // Execution will pause at the 'debugger' line, and you can inspect the values of 'a' and 'b'




  console.log('Start');
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log('End');



function divide(a, b) {
    if (b === 0) {
      debugger; // Execution will pause here if b is 0
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
  console.log(divide(10, 2)); // Output: 5
  console.log(divide(10, 0)); // Execution will pause at the 'debugger' line, and an error will be thrown





  const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
  console.log(num);
});



function recursiveFunction(n) {
    if (n <= 0) {
      return;
    }
    console.log(n);
    recursiveFunction(n - 1);
  }
  recursiveFunction(5); // Output: 5 4 3 2 1




  function fetchData(url) {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        debugger; // Use the debugger to inspect the fetched data
        return data;
      });
  }
  fetchData('https://api.example.com/data');


  

  function calculateTotal(price, quantity) {
    const taxRate = 0.1;
    const total = price * quantity;
    debugger; // Use the debugger to inspect the values of price, quantity, and total
    const tax = total * taxRate;
    return total + tax;
  }
  console.log(calculateTotal(10, 5));




  function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1); // Recursive function that calculates factorial, use debugger to observe the call stack
    }
  }
  console.log(factorial(5));