// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

// Syntax
// array.filter(function(currentValue, index, arr), thisValue)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function callback1(elem, index) {
  if (elem % 2 == 0) return elem;
}
arr = arr.filter(callback1);
console.log(arr);
