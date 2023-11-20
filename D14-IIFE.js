// IIFE : IMMEDIATELY INVOKED FUNCTION EXPRESSION
// IIFE is a function that is executed right after it is created.

let myName = "Avinash";

(function () {
  console.log("Chai is a good thing... ", myName);
})();

// It is created in js to reduce unwanted global scope pollution when we create a function and call it immediately. and we don't want to use it again. we can use IIFE to do that. This will also help us to avoid naming conflicts in global scope if we have multiple functions with same name.

