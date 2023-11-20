// This keyword :

let global = "i am global";
// In Objects this refers to the current context of the object. ----------------

let obj = {
  name: "Avinash",
  age: 24,
  getName: function () {
    console.log(this.name);
  }
};
obj.getName(); // Avinash

// In a function, this refers to the global object. --------------------------
function test1() {
  console.log(this);
}
test1(); // i am global

// In a function, in strict mode, this is undefined.    ------------------------
function test() {
  "use strict";
  console.log(this);
}

// test(); // undefined

//  In global this refers to the global  object.   ------------------------
console.log(this); // {}

// When a function is used as a constructor (with the new keyword), this refers to the newly created object.    ------------------------
function ExampleConstructor() {
  console.log(this);
}

var instance = new ExampleConstructor(); // 'this' refers to the newly created instance
