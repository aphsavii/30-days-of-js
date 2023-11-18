// Currying is a technique in JavaScript where a function is transformed to accept its arguments one at a time, returning a new function after each argument. The resulting function, when finally invoked with all the arguments, produces the intended result.
//  It's a way to create more specialized and reusable functions.

// // Regular function
// function calculateDiscount(price, discount) {
//   return price - price * discount;
// }

// // Curried function
// function curryDiscount(price) {
//   return function (discount) {
//     return price - price * discount;
//   };
// }

// // Usage of the regular function
// console.log(calculateDiscount(100, 0.2)); // Output: 80

// // Usage of the curried function
// const applyDiscount = curryDiscount(100);
// console.log(applyDiscount(0.2)); // Output: 80

//  IN ES6

// Regular function
const calculateDiscount = (price, discount) => price - price * discount;

// Curried function
const curryDiscount = (price) => (discount) => price - price * discount;

// Usage of the regular function
console.log(calculateDiscount(100, 0.2)); // Output: 80

// Usage of the curried function
const applyDiscount = curryDiscount(100);

// next : D11-composition.js
