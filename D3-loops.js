// for in loop -- used for objects and arrays (not recommended for arrays) -- iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.

// for of loop -- used for arrays -- iterates over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

// for loop -- used for arrays -- iterates over a block of code a number of times

// while loop -- used for arrays -- iterates over a block of code while a specified condition is true

// difference between map and forEach is map returns a new array while forEach performs the operation on the same array

let person = {
  name: "John",
  age: 30,
  city: "New York",
};

// for in loop
for (let key in person) {
  console.log(key, person[key]);
}

// for of loop
let arr = [1, 2, 3, 4, 5];
for ( value of arr) {
  console.log(value);
}
for(i in arr){
    console.log(i);
}
function callback(number,index){
arr[index] =number*2;
}
arr.forEach(callback);
console.log(arr);