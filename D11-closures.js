//  Closures : A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// A function returning another function which has access to the variables of its parent function is called a closure..
// in real world it is used when we want to a function to be called when a certain event happens.
// like : when a user clicks on a button, we want to show a message. so we can use closures here.




function hello(name) {
  return function hi() {
    console.log("hello",name);
  };
}

let helloSir = hello("Avinash"); // here function is not called, it is just assigned to a variable.
// but if we have used 
// function hello(name) {
//     console.log("hello",name);
// }
// let helloSir = hello("Avinash"); // here function would have been automatically called but we want it to be called when the varialble is used.
helloSir();