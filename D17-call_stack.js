// A call stack is a way for the JavaScript engine to keep track of its place in code that calls multiple functions. It has the information on what function is currently being run and what functions are invoked from within that function…

// Also, the JavaScript engine uses a call stack to manage execution contexts:

// The global execution context
// Function execution contexts
// The call stack works based on the last-in-first-out (LIFO) principle.

// When you execute a script, the JavaScript engine creates a global execution context and pushes it on top of the call stack.

// Whenever a function is called, the JavaScript engine creates a function execution context for the function, pushes it on top of the call stack, and starts executing the function.

// If a function calls another function, the JavaScript engine creates a new function execution context for the function being called and pushes it on top of the call stack.

// When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off.

// The script will stop when the call stack is empty.

function addOne(num){               // Call stack
    return num+1;                   // hello()
}                                   // addOne()
                                    // addOne() popped out of execution stack
function hello(){                   // hello() poped out of execution stack 
return addOne(0);
}
console.log(hello());