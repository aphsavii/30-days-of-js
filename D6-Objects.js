"use strict";
let myObj = {
  name: "Avinash Kumar",
  age: "20",
};
console.log(myObj.age);
console.log(myObj["name"]); //Another way of accessing objects

myObj.greeting = function () {
  console.log(`Hello ${this.name}!!!`); // this is used to refer to the object
};

console.log(myObj.greeting);
console.log(myObj.greeting());

// Object Destructuring
const { age } = myObj;
const { name: myName } = myObj;
console.log(age);
console.log(myName);

// Object Methods
// Object.assign()  -- copies the values of all enumerable own properties from one or more source objects to a target object.
// Object.create()  -- creates a new object, using an existing object as the prototype of the newly created object.
// Object.defineProperty()   -- defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
// Object.defineProperties()    -- defines new or modifies existing properties directly on an object, returning the object.
// Object.entries()   -- returns an array of a given object's own enumerable string-keyed property [key, value] pairs
// Object.freeze()  -- freezes an object: other code can't delete or change any properties.
// Object.fromEntries() -- transforms a list of key-value pairs into an object.
// Object.getOwnPropertyDescriptor()    -- returns an object describing the configuration of a specific property on a given object (that is, one directly present on an object and not in the object's prototype chain).
// Object.getOwnPropertyDescriptors()   -- returns all own property descriptors of a given object.
// Object.getOwnPropertyNames() -- returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.
// Object.getOwnPropertySymbols()   -- returns an array of all symbol properties found directly upon a given object.
// Object.getPrototypeOf()  -- returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.
// Object.groupBy() -- groups the elements of an array based on the given function.
// Object.prototype.hasOwnProperty()    -- returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
// Object.is()  -- compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).
// Object.preventExtensions()   -- prevents any extensions of an object.
// Object.isExtensible()    -- determines if extending of an object is allowed.
// Object.isFrozen()    -- determines if an object was frozen.
// Object.prototype.isPrototypeOf() -- returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.
// Object.seal()    -- seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.
// Object.isSealed()    -- determines if an object is sealed.
// Object.keys()    -- returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
// Object.prototype.propertyIsEnumerable()  -- returns a Boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set.
// Object.setPrototypeOf()  -- sets the prototype (i.e., the internal [[Prototype]] property).
// Object.prototype.toLocaleString()    -- returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes.
// Object.prototype.toString()  -- returns a string representing the object.
// Object.prototype.valueOf()   -- returns the primitive value of the specified object.
// Object.values()  -- returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)

// 1. Object.assign()----------------------------------------------------------------------------------------------

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj2 = {
  c: 4,
  d: 5,
};

let obj4 = {};
const obj3 = Object.assign(obj4, obj1, obj2);
console.log(obj3);
console.log(obj4);

// 2. Object.create()----------------------------------------------------------------------------------------------

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);
me.name = "Avinash Kumar";
me.a = 5;
console.log(me.name);

// 3. Object.defineProperty()----------------------------------------------------------------------------------------------

const object1 = {};

Object.defineProperty(object1, "property1", {
  value: 42,
  writable: false,
});

// object1.property1 = 77; // Cannot assign to read only property 'property1' of object '#<Object>'
console.log(object1.property1);

// 4. Object.defineProperties() ----------------------------------------------------------------------------------------------

const object2 = { property1: 42 };

Object.defineProperties(object2, {
  property1: {
    writable: true,
    enumerable: true,
  },
  property2: {
    value: "Hello",
    writable: false,
    enumerable: false, // not enumerable -- cannot be iterated over
  },
});
object2.property1 = 77;
console.log(object2);

// 5. Object.entries()-----------------------------------------------------------------------------------------------------------

const object3 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.entries(object3));

// 6. Object.freeze()-----------------------------------------------------------------------------------------------------------

let object4 = {
  property1: 42,
  property2: "Hello",
};

Object.freeze(object4);
// object4.property1 = 4;  // Cannot assign to read only property 'property1' of object '#<Object>'
console.log(object4.property1);

// 7. Object.fromEntries()-----------------------------------------------------------------------------------------------------------

const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const obj5 = Object.fromEntries(entries); // creates a new object from an iterable of key-value pairs (reverses Object.entries)
console.log(obj5);

// 8. Object.getOwnPropertyDescriptor()-----------------------------------------------------------------------------------------------------------

const object6 = {
  property1: 42,
};

const descriptor1 = Object.getOwnPropertyDescriptor(object6, "property1");
console.log(descriptor1);

// 9. Object.getOwnPropertyDescriptors()-----------------------------------------------------------------------------------------------------------

const object7 = {
  property1: 42,
  property2: "Hello",
};

const descriptors = Object.getOwnPropertyDescriptors(object7);
console.log(descriptors);

// 10. Object.getOwnPropertyNames()-----------------------------------------------------------------------------------------------------------
// difference between Object.keys() and Object.getOwnPropertyNames() is that the former returns enumerable properties only, while the latter returns all own properties.
const object8 = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.getOwnPropertyNames(object8));

// 11. Object.getOwnPropertySymbols()-----------------------------------------------------------------------------------------------------------

const object9 = {};
const a = Symbol("a");
const b = Symbol.for("b");

object9[a] = "localSymbol";
object9[b] = "globalSymbol";

const objectSymbols = Object.getOwnPropertySymbols(object9);

console.log(objectSymbols.length);
console.log(objectSymbols);

// 12. Object.getPrototypeOf()-----------------------------------------------------------------------------------------------------------

const prototype1 = {};
const object10 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object10) === prototype1);

// 13. Object.groupBy()-----------------------------------------------------------------------------------------------------------

const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

const groupedPeople = groupBy(people, "age");
console.log(groupedPeople);

// 14. Object.prototype.hasOwnProperty()-----------------------------------------------------------------------------------------------------------

const object12 = {};
object12.property1 = 42;

console.log(object12.hasOwnProperty("property1"));
console.log(object12.hasOwnProperty("toString"));

// 15. Object.is()---------------------------------------------------------------------------------------------------------------------------------
// The Object.is() static method determines whether two values are the same value.

console.log(Object.is(25, 25));
console.log(Object.is("foo", "foo"));
console.log(Object.is("foo", "bar"));

console.log(Object.is(null, null));
console.log(Object.is(undefined, undefined));

// 16. Object.preventExtensible ---------------------------------------------------------------------------------------------------------------
// The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).

const object11 = {};
console.log(Object.isExtensible(object11));
Object.preventExtensions(object11);
console.log(Object.isExtensible(object11));

// 17. Object.isExtensible()---------------------------------------------------------------------------------------------------------------------------------
// The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it).

const object13 = {};
console.log(Object.isExtensible(object13));

Object.preventExtensions(object13);
console.log(Object.isExtensible(object13));

// 18. Object.isFrozen()---------------------------------------------------------------------------------------------------------------------------------
// The Object.isFrozen() determines if an object is frozen.

const object14 = {
  property1: 42,
};

console.log(Object.isFrozen(object14));

Object.freeze(object14);

console.log(Object.isFrozen(object14));

// 19. Object.prototype.isPrototypeOf ---------------------------------------------------------------------------------------------------------------
// The isPrototypeOf() method checks if an object exists in another object's prototype chain.

function object20() {}
function object21() {}

object20.prototype = Object.create(object21.prototype);

const object22 = new object20();

console.log(object20.prototype.isPrototypeOf(object22));

// 20. Object.seal()---------------------------------------------------------------------------------------------------------------------------------
// You can still modify the values of the existing properties in a sealed object, but you cannot add new properties or delete existing ones.
const object15 = {
  property1: 42,
};

Object.seal(object15);
object15.property1 = 33;
console.log(object15.property1);
// object15.property2 = 44; // Cannot add property property2, object is not extensible
// delete object15.property1; // Cannot delete property 'property1' of #<Object>
console.log(object15.property1);

// 21. Object.isSealed()---------------------------------------------------------------------------------------------------------------------------------
// The Object.isSealed() determines if an object is sealed.

const object16 = {
  property1: 42,
};

console.log(Object.isSealed(object16));

Object.seal(object16);

console.log(Object.isSealed(object16));

// 22. Object.keys()---------------------------------------------------------------------------------------------------------------------------------
// The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

const object17 = {
  a: "somestring",
  b: 42,
  c: false,
};  

console.log(Object.keys(object17));

// 23. Object.prototype.propertyIsEnumerable() -----------------------------------------------------------------------------------------------
// The propertyIsEnumerable() method returns a Boolean indicating whether the specified property is enumerable and is the object's own property.

const object18 = {};
object18.property1 = 42;

console.log(object18.propertyIsEnumerable("property1"));
console.log(object18.propertyIsEnumerable("toString"));

// 24. Object.setPrototypeOf()---------------------------------------------------------------------------------------------------------------------------------
// The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.

const object19 = {};

const prototype2 = {};

Object.setPrototypeOf(object19, prototype2);

console.log(Object.getPrototypeOf(object19) === prototype2);

// 25. Object.prototype.toLocaleString() -----------------------------------------------------------------------------------------------

const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

console.log(date1.toLocaleString("en-US"));
console.log(date1.toLocaleString("de-DE"));
console.log(date1.toLocaleString("ar-EG"));

// 26. Object.prototype.toString() -----------------------------------------------------------------------------------------------
// The toString() method returns a string representing the object.

const object23 = {};
object23.toString();
console.log(object23.toString());

// 27. Object.prototype.valueOf() -----------------------------------------------------------------------------------------------
// The valueOf() method returns the primitive value of the specified object.
const object24 = new Number(42);

console.log(object24.valueOf());


// 28. Object.values() -----------------------------------------------------------------------------------------------

const object25 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(object25));


