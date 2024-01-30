// The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.

let obj = {
  name: "Avinash",
  DOB: "06-08-2004",
};

let a = obj?.hobbies;
console.log(a);
