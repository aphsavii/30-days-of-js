// Type conversion can either be implicit (automatically done during code execution) or explicit (done by you the developer).
// Implicit type conversion is also known as type coercion.
// Explicit Type Conversion is also known as Type Casting.

// Note : In Coercion,  one value is converted to the type that fits the other for the operation to be performed.

// Here the number 25 is converted to a string as if string "hello" is converted to number it would be NaN (Not a Number) so the number is converted to string.
console.log(25 + "hello");

// Here - operation can't be performed on string so the string is converted to number.
console.log(25 - "1");

const string = "";
const number = 40;
const boolean = true;

console.log(!string);
// true - string is coerced to boolean `false`, then the NOT operator negates it

console.log(boolean + string);
// "true" - boolean is coerced to string "true", and concatenated with the empty string

console.log(40 + true);
// 41 - boolean is coerced to number 1, and summed with 40
