// Arrow Function - ES6
// Arrow function is a new feature in ES6. It is a shorter way of writing function expressions.

// In arrow functions within Objects  this is undefined ----------------

let obj = {
  name: "Avinash",
  age: 24,
  getName: () => {
    console.log(this.name);
  },
};
obj.getName(); // Avinash

// In arrow functions this refers to global object ----------------

const test = () => {
  console.log(this);
};

test(); // i am global
