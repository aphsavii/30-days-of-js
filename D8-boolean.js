// boolean : True or False
// boolean is a primitive data type in JavaScript. It can have only two values: true or false.

// Example
let x = 5;

console.log(x > 3); // true
console.log(x < 3); // false

// The Boolean() Function
// You can use the Boolean() function to find out if an expression (or a variable) is true:

// Example
Boolean(10 > 9); // returns true
console.log(Boolean(10 > 9)); // true

// Or even easier:

// Example
console.log(10 > 9); // also returns true
// Boolean Values
// Almost any value in JavaScript can be converted to a boolean value.

// Example

// True values 
Boolean(100); // returns true
console.log(Boolean(100)); // true

Boolean(3.14); // returns true

Boolean(-15); // returns true

Boolean("Hello"); // returns true

Boolean("false"); // returns true

Boolean(1); // returns true

// false Values in JavaScript

Boolean(0); // returns false

Boolean(-0); // returns false

Boolean(""); // returns false

Boolean(null); // returns false

Boolean(false); // returns false

Boolean(undefined); // returns false

