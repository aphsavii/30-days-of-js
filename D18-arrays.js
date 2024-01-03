let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, [2, 3, [4, 5]]];

// slice()-----------------------------------------------------------------
// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

let temp1 = arr1.slice(0, 3); // endINdex is not inclusive
console.log(temp1);
temp1[0] = 5;
console.log(arr1);
console.log(arr1.slice(2)); // if provide with single arg the array will trime from that index to the end of the array

// splice() ----------------------------------------------------------------
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let temp2 = arr1.splice(0, 3); // endINdex is not inclusive
console.log(temp2);
// console.log(arr1);

temp2.splice(2, 0, 10);         // remove 0 item before index 2 and add 10 
console.log(temp2);

temp2.splice(2,1,5);            // remove 1 element at index 2 and insert 5
console.log(temp2);

// concat() ----------------------------------------------------------------
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

let temp3 = arr1.concat(arr2);
console.log(temp3);

// join() ----------------------------------------------------------------
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

let temp4 = arr1.join();
console.log(temp4);

// flat() ----------------------------------------------------------------
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

let temp5 = arr2.flat(2);
console.log(temp5);

// flatMap() ----------------------------------------------------------------
// The flatMap() method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map() followed by a flat() of depth 1, but flatMap() is often quite useful, as merging both into one method is slightly more efficient.

let temp6 = arr2.flatMap((x) => x + 1);
console.log(temp6);

// shift() ----------------------------------------------------------------
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

let temp7 = arr1.shift();
console.log(temp7);
console.log(arr1);

// unshift() ----------------------------------------------------------------
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

let temp8 = arr1.unshift(1,2,3,4);
console.log(temp8);
console.log(arr1);

// find() ----------------------------------------------------------------
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

let temp9 = arr1.find((x) => x %2==0);
console.log(temp9);