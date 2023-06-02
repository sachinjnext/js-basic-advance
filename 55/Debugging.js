function sum(a, b) {
  debugger; // Execution will pause here
  return a + b;
}
console.log(sum(2, 3)); // Execution will pause at the 'debugger' line, and you can inspect the values of 'a' and 'b'



function calculateTotal(price, quantity) {
  const taxRate = 0.1;
  const total = price * quantity;
  debugger; // Use the debugger to inspect the values of price, quantity, and total
  const tax = total * taxRate;
  return total + tax;
}
console.log(calculateTotal(10, 5));


const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
  console.log(num);
});

console.log('Start');
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log('End');