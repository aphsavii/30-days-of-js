// Strict mode :

// 1. Strict mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context.
// 2. This strict context prevents certain actions from being taken and throws more exceptions.
// 3. The statement "use strict"; instructs the browser to use the Strict mode, which is a reduced and safer feature set of JavaScript.
// 4. You can enable Strict mode globally or only for specific functions.
// 5. Strict mode makes it easier to write "secure" JavaScript.
// 6. Strict mode changes previously accepted "bad syntax" into real errors.
// 7. As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
// 8. In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.
// 9. In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.
// 10. In normal JavaScript, a developer will not receive any error feedback when deleting undeletable properties.
// 11. In strict mode, any delete operation on a undeletable property will throw an error.
// 12. Strict mode disallows duplicate parameter names in function declarations.

// "use strict";

// Undeclared Variable Assignment: -----------------------------------

// Non-strict mode
x = 10; // Creates a global variable 'x'

// Strict mode
"use strict";
y = 20; // Throws a ReferenceError: y is not defined

// Duplicate Parameter Names: ---------------------------------------

// Non-strict mode
function example(a, b, a) {
    console.log(a, b);
}
example(1, 2, 3); // No error, prints 3 2

// Strict mode
"use strict";
function strictExample(a, b, a) { // Throws a SyntaxError: Duplicate parameter name not allowed in this context
    console.log(a, b);
}

// Deleting Variables: -----------------------------------------------

// Non-strict mode
var nonStrictVar = 42;
delete nonStrictVar; // No error

// Strict mode
"use strict";
var strictVar = 42;
delete strictVar; // Throws a TypeError: Cannot delete variable 'strictVar'


// Assignment to Read-Only Properties: -------------------------------

// Non-strict mode
var obj = {};
Object.defineProperty(obj, "readOnlyProp", { value: 42, writable: false });
obj.readOnlyProp = 10; // No error, but the assignment is ignored

// Strict mode
"use strict";
var strictObj = {};
Object.defineProperty(strictObj, "readOnlyProp", { value: 42, writable: false });
strictObj.readOnlyProp = 10; // Throws a TypeError: Cannot assign to read-only property 'readOnlyProp' of object



