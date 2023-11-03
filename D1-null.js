// The null value represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations

// The value null is written with a literal: null. null is not an identifier for a property of the global object, like undefined can be. Instead, null expresses a lack of identification, indicating that a variable points to no object. In APIs, null is often retrieved in a place where an object can be expected but no object is relevant.

console.log(typeof null); // "object"

const person = {
    name: "John",
    age: 30,
  };
  
person.age = null; // Remove the age property
console.log(person);
console.log(person.age); 