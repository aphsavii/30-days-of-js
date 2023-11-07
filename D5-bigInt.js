// BigInt
// BigInt values represent numeric values which are too large to be represented by the number primitive.

// Note: JavaScript integers are only accurate up to 15 digits:

// A BigInt can not have decimals.

// Notes
// Arithmetic between a BigInt and a Number is not allowed (type conversion lose information).

// Unsigned right shift (>>>) can not be done on a BigInt (it does not have a fixed width).

let x = BigInt(999999999999999);
let type = typeof x;
console.log(x);
console.log(type);