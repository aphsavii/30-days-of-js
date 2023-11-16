// A global object is an object that always exists in the global scope.
// In JavaScript, there's always a global object defined. In a web browser, when scripts create global variables, they're created as members of the global object. (In Node.js this is not the case.) The global object's interface depends on the execution context in which the script is running. For example:
// In a web browser, any code which the script doesn't specifically start up as a background task has a Window as its global object. This is the vast majority of JavaScript code on the Web.

// In Node.js, the top-level scope is not the global scope; var something inside a Node.js module will be local to that module.

console.log(this);

console.log(globalThis);

// try running these in the browser and in node

// globalThis works in both the browser and node but this only works in the browser