// new keyword in JS
// new keyword is used to create an object from a function

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Eagle", "Talon TSi", 1993);

console.log(car1.make);
// Expected output: "Eagle"

// The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
// The new keyword does the following things:
// Creates a blank, plain JavaScript object;
// Links (sets the constructor of) this object to another object;
// Passes the newly created object from Step 1 as the this context;
// Returns this if the function doesn't return its own object.

//  prototype property 
Car.prototype.getColor = function (color) {
  return color;
};

console.log(car1.getColor("red"));
