// Set only stores unique values and does not guarantee a specific order.
// It is similar to an array, but it is not an array.
// It is a collection of values.
// It is a new object type introduced in ES6.

// SET METHODS :
// Set.prototype.add()      --> Adds a new element with a specified value to the set.
// Set.prototype.clear()    --> Removes all the elements from the set.
// Set.prototype.delete()   --> Removes the specified element from the set.
// Set.prototype.entries()  --> Returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in insertion order.
// Set.prototype.forEach()  --> Calls the specified callback function for each value in the Set object, in insertion order.
// Set.prototype.has()      --> Returns a boolean indicating whether an element with the specified value exists in a Set object or not.
// Set.prototype.keys()     --> Returns a new Iterator object that contains the keys for each element in the Set object, in insertion order.
// Set.prototype.values()   --> Returns a new Iterator object that contains the values for each element in the Set object, in insertion order.

// what is an iterator object ?
// An iterator object is an object that contains a countable number of values.  An iterator object can be iterated upon, meaning that you can traverse through all the values.  Technically, in JavaScript, an iterator object must implement a next() method that returns an object with two properties:   done and value.
// An iterator keeps track of its current position within a sequence.  Calling next() on an iterator moves the iterator along to the next item in the sequence and returns the value from the current position.  When there are no more items in the sequence, next() returns an object with the done property set to true and all subsequent calls to next() return this same object.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5];

// Creating a set
const set = new Set();
for (let i = 0; i < arr.length; i++) {
  // Adding elements to the set
  set.add(arr[i]);
}
console.log(set); // Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

// Delete an element from the set
set.delete(10);
console.log(set); // Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }

// Check if an element exists in the set
console.log(set.has(10)); // false

// Iterate over the set with forEach
set.forEach((value) => {
  console.log(value * 2);
});

// Clear the set
set.clear();
console.log(set); // Set(0) {}

// Set size
console.log(set.size); // 0

// Set values
console.log(set.values()); // [Set Iterator] {  }
