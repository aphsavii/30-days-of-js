// In destructuring we have to keep one thing in mind that the data type of the left and the right side should be same.

// array destructuring
// const array = ["Avinash", 21, "India"];

// const [name, age] = array;

// console.log(name, age);

// object destructuring
// In object destructuring we have to keep one thing in mind that the name of the variable should be same as the key of the object.
const obj = {
  name: "Avinash",
  age: 21,
  country: "India",
};

const { name, age, country } = obj;

console.log(name, age, country);
