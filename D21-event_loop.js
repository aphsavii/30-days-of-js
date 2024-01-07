// Event loop is related to the call stack and task queue.
// Javascript on its own is single threaded and can perform one task at a time. But with the help of web api's asynchronous tasks can be performed.

// javascript is synchrounus and blocking the interpreter pushes code line by line into the call stack for execution if it has some async code like a setTimeout or an event like click  then the event loop comes in action.
// The async code is pushed into the callback queue and the web api executes the async code while the interpreter moves on to next line pushing them into the call stack at these times the event loop is in action it checks if any operation is completed in the callback queue or in the call stack if any task is completed in the callback queue it pops it from there and pushes it to the call stack and after completion pop it from the call stack.

// That's all for the Event Loop ...