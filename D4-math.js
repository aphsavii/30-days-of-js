// Math
// The Math namespace object contains static properties and methods for mathematical constants and functions.
// Math works with the Number type. It doesn't work with BigInt.

// Math methods :
// Math.abs() --> returns the absolute value of a number
// Math.cbrt()  --> returns the cube root of a number
// Math.ceil()  --> returns the smallest integer greater than or equal to a given number
// Math.floor() --> returns the largest integer less than or equal to a given number
// Math.hypot()    --> returns the square root of the sum of squares of its arguments
// Math.log()   --> returns the natural logarithm (base e) of a number
// Math.log10()   --> returns the base 10 logarithm of a number
// Math.log2()  --> returns the base 2 logarithm of a number
// Math.max()   --> returns the largest of zero or more numbers
// Math.min()   --> returns the smallest of zero or more numbers
// Math.pow()   --> returns base to the exponent power, that is, baseexponent
// Math.random()    --> returns a pseudo-random number between 0 and 1
// Math.round() --> returns the value of a number rounded to the nearest integer
// Math.sign()  --> returns the sign of the x, indicating whether x is positive, negative or zero
// Math.sqrt()  --> returns the positive square root of a number
// Math.trunc() --> returns the integer part of the number x, removing any fractional digits

console.log(Math.abs(-5)); // 5
console.log(Math.cbrt(8)); // 2
console.log(Math.ceil(5.2)); // 6
console.log(Math.floor(5.2)); // 5
console.log(Math.hypot(3, 4)); // 5
console.log(Math.log(8)); // 0.6931471805599453
console.log(Math.log10(100)); // 2
console.log(Math.log2(8)); // 3
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.pow(2, 3)); // 8
console.log(Math.random()); // 0.6170678822825511
console.log(Math.round(5.5)); // 6
console.log(Math.sign(-5)); // -1
console.log(Math.sqrt(9)); // 3
console.log(Math.trunc(5.5989)); // 5
