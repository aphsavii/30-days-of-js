// A deep copy, on the other hand, creates an entirely new object or array along with new copies of all nested objects or arrays. Changes to the nested objects or arrays in the copy do not affect the original data.

// One way to make a deep copy of a JavaScript object, if it can be serialized, is to use JSON.stringify() to convert the object to a JSON string, and then JSON.parse() to convert the string back into a (completely new) JavaScript object:

const arr1 = [1, 2, 3, [4, 5, 6], 7];

const arr2 = JSON.parse(JSON.stringify(arr1));

console.log(arr1);

arr2[3][1] = 10;

console.log(arr2);
console.log(arr1);
