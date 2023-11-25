// Everything in js is an object by itself or inherits from an object. Eg. function, array etc.
// Every object has a prototype property which is used to add properties and methods to the object.

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}
Person.age = 10;

Person("John", "Doe", "8-12-90");
console.log(globalThis.firstName);
console.log(Person.age); // This proves that Person is an object

// Adding a method to the Person object
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const avi = Person("Avinash", "Kumar", "06-08-2004");
// avi.getFullName();   // This will throw an error as avii is not an object of Person

const avii = new Person("Avinash", "Kumar", "06-08-2004"); // This will work as avii is an object of Person as we are using new keyword
console.log(avii.getFullName());

// New keyword initiates a new object and sets the this keyword to that object. It also returns the object.
// THe newly crreated object gets linked to the prototype property of the constructor function. This is how the object gets access to the methods and properties of the prototype property of the constructor function.

// We can add properties to the prototype of array, string, objects as well.

Object.prototype.sayHi = function () {          //this will add satHi method to all the objects including arrays, strings etc. as they inherit from Object.
  console.log(`Hi boyyy`);
};

const arr = [1, 2, 3, 4, 5];
arr.sayHi();

// We can also override the existing methods of the prototype property of the constructor function.
String.prototype.toUpperCase = function () {
  return "I am not shouting";
};
console.log("hello".toUpperCase());

// We can also add properties to the prototype property of the constructor function.
Person.prototype.address = "Delhi";
console.log(avii.address);

// We can also add methods to array, strings etc.

String.prototype.trueLength = function () {
return this.trim().length;
}

console.log("hiiii".trueLength());
console.log("    Hello    ".trueLength());