// Shallow Copy:
// A shallow copy creates a new object or array, but it only copies the references to the original nested objects or arrays, rather than creating copies of them. As a result, changes to the nested objects or arrays in the copy will affect the original data.

// In JavaScript, all standard built-in object-copy operations (spread syntax, Array.prototype.concat(), Array.prototype.slice(), Array.from(), Object.assign(), and Object.create()) create shallow copies rather than deep copies.

let arr = [1, 2, 3, [4, 5, 6]];

let arr2 = arr.slice(3);
console.log(arr2);

arr2[0][1] = 10;

console.log(arr); // we have changed the arr2 but arr also go changed as nested objects are not copied they are reffered from arr

// Another example of shallow copy

let array1 = [1, 2, 3, [4, 5, 6]];

let array2 = array1;

console.log(array2);

array2[3][1] = 10;

console.log(array2);
console.log(array1);
