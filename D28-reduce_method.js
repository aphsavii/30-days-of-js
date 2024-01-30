// The reduce method simply converts the array insto a single value
// It can take two parameters the first a callback and the second is an intial value i.e. optional, if not provided element at index 0 is taken as inital value

// syntax

let arr = [10, 20, 20, 30, 40];

function callback(accumulator, nextValue) {
  // the accoumulator stores the previously returned value while nextValue stores element at next Index
  return accumulator + nextValue;
}

let sum = arr.reduce(callback);   // try adding 20 as 2nd param for initial value
console.log(sum);