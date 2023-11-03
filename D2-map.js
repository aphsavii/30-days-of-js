// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

// Methods:
// Map.prototype.clear()    -- Removes all key/value pairs from the Map object.
// Map.prototype.delete()   -- Removes any value associated to the key and returns the value that Map and return trur if successful or false if not.
// Map.prototype.entries()  -- Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.
// Map.prototype.forEach()  -- Calls callbackFn once for each key-value pair present in the Map object, in insertion order.     -- callbackFn(value, key, map)
// Map.prototype.get()      -- Returns the value associated to the key, or undefined if there is none.
// Map.groupBy()
// Map.prototype.has()      -- Returns a boolean asserting whether a value has been associated to the key in the Map object or not.
// Map.prototype.keys()     -- Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
// Map.prototype.set()      -- Sets the value for the key in the Map object. Returns the Map object.
// Map.prototype.values()   -- Returns a new Iterator object that contains the values for each element in the Map object in insertion order.

// creating a map
let map1 = new Map();

// setting values in a map
map1.set("name", "John");
map1.set("age", 30);

// get values from a map
console.log(map1.get("name"));

// has method
console.log(map1.has("name"));

// foreach method
map1.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

// get keys
console.log(map1.keys());
for (let key of map1.keys()) {
  console.log(key);
}

// get values
console.log(map1.values());
for (let value of map1.values()) {
  console.log(value);
}

// size is property of map
console.log(map1.size);

// clear method
map1.clear();
console.log(map1.size);

// delete method
console.log(map1.delete("age"));

// Array map method

//The Array.map() method in JavaScript is used to create a new array by applying a function to each element of an existing array. It returns a new array with the results of applying the given function to each element in the original array. The original array remains unchanged.

// Syntax:
// array.map(function(currentValue, index, arr), thisValue)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arraow function syntax
let newarr = arr.map((element) => element * 2);
console.log(newarr);

// normal function syntax
newarr = newarr.map(function callback(currentValue, index) {
  return currentValue + index+arr[0];
});
console.log(newarr);
