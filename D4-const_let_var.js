var a = 5;

if (true) {
  var a = 10; // problem with var keyword is that it is not block scoped and hence the value of a is changed to 10 in this case
}
console.log(a);

// let keyword is block scoped and hence the value of a is not changed to 10 in this case
let b = 5;

if (true) {
  let b = 10;
}
console.log(b);

// const keyword is block scoped and hence the value of a is not changed to 10 in this case and either its's value can't be changed as it is a constant
const c = 5;

if (true) {
  const c = 10;
}
console.log(c);

// Hoisting of var : it is declared and initialized as undefined

console.log(h);
var h = 5;

// Hoisting of let and constant : it is declared but not initialised if accessed before initalization it will throw reference error

// console.log(i);        // Cannot access 'i' before initialization
let i = 10;
// console.log(j);         // Cannot access 'i' before initialization
const j = 6;
