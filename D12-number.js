// Numbers in JavaScript are "double-precision 64-bit format IEEE 754 values", according to the spec.

// Note :
// In JavaScript, a "safe integer" refers to an integer value that can be exactly represented by the JavaScript number format without any loss of precision. JavaScript uses the IEEE 754 double-precision floating-point format to represent numbers, which means that not all integers can be represented exactly.

// PROPERTIES :-----------------------------
// Number.EPSILON  -- smallest value that can be added to 1 to get a distinct number
// Number.MAX_SAFE_INTEGER  -- largest integer that can be represented
// Number.MAX_VALUE -- largest number that can be represented
// Number.MIN_SAFE_INTEGER -- smallest integer that can be represented
// Number.MIN_VALUE -- smallest number that can be represented
// Number.NaN -- not a number
// Number.NEGATIVE_INFINITY -- negative infinity
// Number.POSITIVE_INFINITY -- positive infinity

// METHODS :--------------------------------
// Number.isFinite() -- determines whether the passed value is a finite number
// Number.isInteger() -- determines whether the passed value is an integer
// Number.isNaN() -- determines whether the passed value is NaN
// Number.isSafeInteger() -- determines whether the passed value is a safe integer
// Number.parseFloat() -- parses an argument and returns a floating point number
// Number.parseInt() -- parses a string argument and returns an integer of the specified radix or base
// Number.prototype.toExponential() -- returns a string representing the number in exponential notation
// Number.prototype.toFixed() -- returns a string representing the number in fixed-point notation
// Number.prototype.toLocaleString() -- returns a string with a language sensitive representation of this number
// Number.prototype.toPrecision() -- returns a string representing the number to a specified precision in fixed-point or exponential notation
// Number.prototype.toString() -- returns a string representing the specified object in the specified radix (base)
// Number.prototype.valueOf() -- returns the primitive value of the specified object

// Number.EPSILON
console.log(Number.EPSILON); // 2.220446049250313e-16

// Number.MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// Number.MAX_VALUE
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

// Number.MIN_SAFE_INTEGER
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// Number.MIN_VALUE
console.log(Number.MIN_VALUE); // 5e-324

// Number.NaN
console.log(Number.NaN); // NaN

// Number.NEGATIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY); // -Infinity

// Number.POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY); // Infinity

// METHODS :--------------------------------

// Number.isFinite()
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(123)); // true

// Number.isInteger()
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(1)); // true
console.log(Number.isInteger(-100000)); // true
console.log(Number.isInteger(99.9)); //true

// Number.isNaN()
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0)); // true
console.log(Number.isNaN(Infinity)); // false
console.log(Number.isNaN("helo" / 5)); // false

// Number.isSafeInteger()
console.log(Number.isSafeInteger(3)); // true
console.log(Number.isSafeInteger(Math.pow(2, 53))); // false

// Number.parseFloat()
console.log(Number.parseFloat("3.14")); // 3.14

// Number.parseInt()
console.log(Number.parseInt("3.14")); // 3
console.log(Number.parseInt("3.14", 10)); // 3

// Number.prototype.toExponential()
console.log((1234).toExponential()); // 1.234e+3

// Number.prototype.toFixed()
console.log((1234.5678).toFixed()); // 1235
console.log((1234.5678).toFixed(2)); // 1234.57

// Number.prototype.toLocaleString()
console.log((1234.5678).toLocaleString()); // 1,234.568

// Number.prototype.toPrecision()
console.log((1234.5678).toPrecision()); // 1234.5678
console.log((1234.5678).toPrecision(2)); // 1.2e+3

// Number.prototype.toString()
console.log((1234.5678).toString()); // 1234.5678

// Number.prototype.valueOf()
console.log((1234.5678).valueOf()); // 1234.5678



